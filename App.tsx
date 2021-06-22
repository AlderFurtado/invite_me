import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GuestListScreen from "./screens/GuestListScreen";
import LoginScreen from "./screens/LoginScreen";
import SelectTypeScreen from "./screens/SelectTypeScreen";
import FormInfoParty from "./screens/FormInfoParty";

import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectType"
          component={SelectTypeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={GuestListScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity onPress={() => alert("This is a button!")}>
                <Ionicons name="help" size={32} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="FormInfo"
          component={FormInfoParty}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
