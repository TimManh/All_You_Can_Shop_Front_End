import React, { useState, useContext } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { setSignIn } from "../Main/global";

export default function ChangeInfo({ navigation }) {
  const { user, setUser } = useContext(setSignIn);
  const [name, setName] = useState(user.user.name);
  const [address, setAddress] = useState(user.user.address);
  const [phone, setPhone] = useState(user.user.phone);
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrowleft"
            style={{ fontSize: 30, color: "#B10D65", marginRight: 100 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>User Infomation</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          autoCapitalize="none"
          value={name}
          onChangeText={(txtName) => setName(txtName)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your address"
          autoCapitalize="none"
          value={address}
          onChangeText={(txtAddress) => setAddress(txtAddress)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          value={phone}
          onChangeText={(txtPhone) => setPhone(txtPhone)}
        />
        <TouchableOpacity
          style={styles.signInContainer}
          onPress={() => {
            fetch("http://10.0.0.231/api/change_info.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                token: user.token,
                name: name,
                address: address,
                phone: phone,
              }),
            })
              .then((res) => res.json())
              .then((resJSON) =>
                Alert.alert(
                  "Notice",
                  "Info Updated ",
                  [{ text: "OK", onPress: () => navigation.navigate("Shop") }],
                  { cancelable: false }
                )
              )
              .catch((err) => console.log(err));
          }}
        >
          <Text style={styles.signInTextStyle}>CHANGE YOUR INFOMATION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#79b8ff",
    paddingTop: 35,
    flexDirection: "row",
    paddingHorizontal: 10,
  }, // eslint-disable-line
  headerTitle: { color: "#B10D65", fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: "#F6F6F6", justifyContent: "center" },
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: "#79b8ff",
    borderWidth: 1,
  },
  signInTextStyle: {
    color: "#B10D65",
    fontWeight: "600",
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: "#79b8ff",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});
