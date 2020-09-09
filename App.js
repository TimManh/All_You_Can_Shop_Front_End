import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Components/Main/Main";
import DrawerContent from "./Components/Main/DrawerContent/DrawerContent";
import Authentication from "./Components/Authentication/Authentication";
import ChangeInfo from "./Components/ChangeInfo/ChangeInfo";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import { setSignIn } from "./Components/Main/global";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  return (
    <setSignIn.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Shop" component={Main} />
          <Drawer.Screen name="Authentication" component={Authentication} />
          <Drawer.Screen name="Change Info" component={ChangeInfo} />
          <Drawer.Screen name="Order History" component={OrderHistory} />
        </Drawer.Navigator>
      </NavigationContainer>
    </setSignIn.Provider>
  );
}
