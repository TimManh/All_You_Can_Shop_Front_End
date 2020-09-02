import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <FontAwesome5 name="bars" style={{ marginTop: 10, fontSize: 30 }} />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
          }}
        >
          All You Can Shop
        </Text>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            console.log("clicked");
          }}
        >
          <FontAwesome5 name="female" style={{ marginTop: 10, fontSize: 30 }} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          backgroundColor: "#FFF",
          marginTop: 10,
          fontSize: 17,
          paddingLeft: 10,
        }}
        placeholder="Find products"
      />
    </View>
  );
}
