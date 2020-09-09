import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/AntDesign";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
// import register from "../api/register";
export default function Authentication({ navigation }) {
  const {
    activeStyle,
    inactiveStyle,
    controlStyle,
    signInStyle,
    signUpStyle,
  } = styles;

  const [isSignIn, setisSignIn] = useState(false);

  const mainJSX = isSignIn ? <SignIn /> : <SignUp SignIn={setisSignIn} />;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#79b8ff",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="arrowleft"
              style={{ marginTop: 10, fontSize: 35, color: "#B10D65" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 22,
              fontSize: 20,
              color: "#B10D65",
            }}
          >
            ALL YOU CAN SHOP
          </Text>

          <FontAwesome5
            name="female"
            style={{ marginTop: 20, fontSize: 30, color: "#B10D65" }}
          />
        </View>
      </View>
      {mainJSX}
      <View style={controlStyle}>
        <TouchableOpacity style={signInStyle} onPress={() => setisSignIn(true)}>
          <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={signUpStyle}
          onPress={() => setisSignIn(false)}
        >
          <Text style={isSignIn ? inactiveStyle : activeStyle}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  controlStyle: { flexDirection: "row", alignSelf: "stretch" },
  signInStyle: {
    alignItems: "center",
    backgroundColor: "#FFF",
    fontSize: 30,
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1.5,
  },
  signUpStyle: {
    backgroundColor: "#fff",
    fontSize: 30,
    paddingVertical: 15,
    flex: 1,
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 1.5,
  },
  inactiveStyle: {
    color: "#D7D7D7",
  },
  activeStyle: {
    color: "#B10D65",
  },
});
