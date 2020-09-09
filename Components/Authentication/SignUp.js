import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function SignUp(props) {
  const { inputStyle, bigButton, buttonText } = styles;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const gotoSignIn1 = props.SignIn;
  const registerUser = () => {
    fetch("http://10.0.0.231/api/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, name: name, password: password }),
    })
      .then((res) => {
        return res.text();
      })
      .then((resJson) => {
        if (resJson === "THANH_CONG") {
          onSuccess();
        } else {
          onFail();
        }
      });
  };
  const onSuccess = () => {
    Alert.alert(
      "Notice",
      "Sign up successful",
      [{ text: "OK", onPress: () => gotoSignIn1(true) }],
      { cancelable: false }
    );
  };
  const onFail = () => {
    Alert.alert(
      "Notice",
      "Please Try Again, email has been used",
      [{ text: "OK", onPress: () => setEmail("") }],
      { cancelable: false }
    );
  };
  return (
    <View>
      <TextInput
        style={inputStyle}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <TextInput
        style={inputStyle}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={inputStyle}
        placeholder="Enter your password"
        value={password}
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <TextInput
        style={inputStyle}
        placeholder="Re-enter your password"
        value={repassword}
        secureTextEntry
        onChangeText={(text) => {
          setRePassword(text);
        }}
      />
      <TouchableOpacity style={bigButton} onPress={() => registerUser()}>
        <Text style={buttonText}>SIGN UP NOW</Text>
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
