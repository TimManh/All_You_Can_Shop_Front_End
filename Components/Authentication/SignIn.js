import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import { setSignIn } from "../Main/global";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { inputStyle, bigButton, buttonText } = styles;
  const { user, setUser } = useContext(setSignIn);
  const navigation = useNavigation();

  const onSignIn = () => {
    fetch("http://10.0.0.231/api/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        setUser(resJson);
        AsyncStorage.setItem("@token", JSON.stringify(user.token));

        navigation.navigate("Shop");
      })
      .catch((err) => err);
  };
  return (
    <View>
      <TextInput
        style={inputStyle}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={inputStyle}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={bigButton}
        onPress={() => {
          onSignIn();
        }}
      >
        <Text style={buttonText}>SIGN IN NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30,
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#B10D65",
    fontWeight: "400",
  },
});
