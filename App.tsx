import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListContact from "./components/ListContact";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Lista de contatos</Text>
        <Ionicons name="md-filter" size={32} color="black" />
      </View>
      <ListContact />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
