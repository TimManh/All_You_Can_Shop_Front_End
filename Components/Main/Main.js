import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Shop from "./Shop/Shop";

const Stack = createStackNavigator();
export default function Main() {
  return (
    <Stack.Navigator
      drawerStyle={{
        width: 240,
      }}
    >
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
