import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Shop from "./Shop/Shop";
const Drawer = createDrawerNavigator();
export default function Main({ navigation }) {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: 240,
      }}
    >
      <Drawer.Screen name="Shop" component={Shop} />
    </Drawer.Navigator>
  );
}
