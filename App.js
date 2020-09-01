import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Components/Main/Main";
import Authentication from "./Components/Authentication/Authentication";
import ChangeInfo from "./Components/ChangeInfo/ChangeInfo";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitleStyle: { marginLeft: 110 },
            // header
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  console.log("touch");
                }}
              >
                <FontAwesome5
                  name="bars"
                  style={{ marginLeft: 10, fontSize: 25 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Change Info" component={ChangeInfo} />
        <Stack.Screen name="Order History" component={OrderHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
