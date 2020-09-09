import React, { useEffect, useContext } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Shop from "./Shop/Shop";
import { AsyncStorage } from "react-native";
import { setSignIn } from "../Main/global";
const Stack = createStackNavigator();
// const token =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IlRlc3RAZ21haWwuY29tIiwiaWF0IjoxNTk5NjIzOTE2LCJleHBpcmUiOjE1OTk3OTY3MTZ9.a-fRqOm6Z9ZG1K5s-Hlm1JpfOVtniniN1AFwcMqkLqY";
export default function Main() {
  const { user, setUser } = useContext(setSignIn);
  useEffect(() => {
    const getToken = async () => {
      try {
        const item = await AsyncStorage.getItem("@token");
        if (item !== null) {
          // console.log(item);
          return JSON.parse(item);
        }
        return "";
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    };
    getToken().then((token) => {
      // console.log(token);
      if (token !== "") {
        fetch("http://10.0.0.231/api/check_login.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ token: token }),
        })
          .then((res) => res.json())
          .then((resJson) => setUser(resJson))
          .catch((err) => console.log(err));
      }
    });
  });
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
