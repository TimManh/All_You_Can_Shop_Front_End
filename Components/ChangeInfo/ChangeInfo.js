import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function ChangeInfo({ navigation }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
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
          onChangeText={(txtName) => this.setState({ ...this.state, txtName })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your address"
          autoCapitalize="none"
          value={address}
          onChangeText={(txtAddress) =>
            this.setState({ ...this.state, txtAddress })
          }
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your phone number"
          autoCapitalize="none"
          value={phone}
          onChangeText={(txtPhone) =>
            this.setState({ ...this.state, txtPhone })
          }
        />
        <TouchableOpacity style={styles.signInContainer}>
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
