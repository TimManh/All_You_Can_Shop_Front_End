import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchView from "./SearchView";
import ProductDetail from "../ProductDetail/ProductDetail";
const Stack = createStackNavigator();
export default function Search() {
  return (
    <Stack.Navigator initialRouteName="SearchView">
      <Stack.Screen
        name="SearchView"
        component={SearchView}
        options={{ headerShown: false }}
        initialParams={{ test: null }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
