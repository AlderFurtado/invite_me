import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Contact } from "../../interfaces/contact";
import { useNavigation } from "@react-navigation/native";

const ListContact = (): JSX.Element => {
  const [listContact, setListContact] = useState<Contact[]>([]);
  const [listContactCache, setListContactCache] = useState<Contact[]>([]);
  const [findName, setFindName] = useState<string>("");

  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        getContactsByDevice();
      }
    })();
  }, []);

  const getContactsByDevice = async () => {
    const { data } = await Contacts.getContactsAsync();

    if (data.length > 0) {
      const contacts = getOnlyValidateContact(data);

      setListContact(contacts as Contact[]);
      setListContactCache(contacts as Contact[]);
    }
  };

  const getOnlyValidateContact = (contact: any[]) => {
    return contact
      .map((d, index) => {
        if (d.phoneNumbers) {
          if (d.phoneNumbers[0]?.number?.includes("+")) {
            return {
              id: index,
              name: d.firstName,
              phoneNumber: d.phoneNumbers[0].number,
              isSelected: false,
            };
          }
        }
        return {};
      })
      .filter((a: {}) => Object.keys(a).length > 0);
  };

  const toggleContact = (id: number) => {
    const newListContact = listContact.map((contact) => {
      if (contact.id === id) {
        contact.isSelected = !contact.isSelected;
        return contact;
      }
      return contact;
    });
    setListContact(newListContact);
  };

  const findContactByName = (letters: string) => {
    const newListContact = listContactCache.filter((contact) =>
      contact.name.includes(letters)
    );
    setListContact(newListContact);
  };

  return (
    <>
      <TextInput
        style={{ borderRadius: 20, borderColor: "black", borderWidth: 1 }}
        value={findName}
        onChangeText={(text) => {
          setFindName(text);
          findContactByName(text);
        }}
      />
      <FlatList
        data={listContact || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const { name, phoneNumber, isSelected, id } = item;
          // console.log(item);

          return (
            <TouchableOpacity
              onPress={() => {
                toggleContact(id);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>{name}</Text>
                  <Text>{phoneNumber}</Text>
                </View>
                {isSelected ? (
                  <Ionicons name="md-checkbox" size={32} color="black" />
                ) : (
                  <Ionicons
                    name="md-checkbox-outline"
                    size={32}
                    color="black"
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("FormInfo")}
        style={{
          borderRadius: 20,
          backgroundColor: "blue",
          paddingHorizontal: 6,
          paddingVertical: 16,
          position: "absolute",
          alignSelf: "center",
          bottom: 0,
        }}
      >
        <Text>Fechar lista de convidados</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListContact;
