import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Components/Main/Main";

import Authentication from "./Components/Authentication/Authentication";
import ChangeInfo from "./Components/ChangeInfo/ChangeInfo";
import OrderHistory from "./Components/OrderHistory/OrderHistory";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Authentication" component={Authentication} />
        <Drawer.Screen name="Change Info" component={ChangeInfo} />
        <Drawer.Screen name="Order History" component={OrderHistory} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
