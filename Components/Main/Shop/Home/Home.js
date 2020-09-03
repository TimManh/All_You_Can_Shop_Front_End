import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "./HomeView";
import ProductDetail from "../ProductDetail/ProductDetail";
import ListProduct from "../ListProduct/ListProduct";
const Stack = createStackNavigator();
export default function Home() {
  return (
    <Stack.Navigator initialRouteName="HomeView">
      <Stack.Screen
        name="HomeView"
        component={HomeView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
});
