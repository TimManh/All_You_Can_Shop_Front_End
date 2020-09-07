import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartView from "./CartView";
import ProductDetail from "../ProductDetail/ProductDetail";
const Stack = createStackNavigator();
export default function Cart() {
  return (
    <Stack.Navigator initialRouteName="CartView">
      <Stack.Screen
        name="CartView"
        component={CartView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
