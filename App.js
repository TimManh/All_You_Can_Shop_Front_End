import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Components/Main/Main";
import Authentication from "./Components/Authentication/Authentication";
import ChangeInfo from "./Components/ChangeInfo/ChangeInfo";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Change Info" component={ChangeInfo} />
        <Stack.Screen name="Order History" component={OrderHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
