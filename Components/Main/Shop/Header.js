import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <FontAwesome5
            name="bars"
            style={{ marginTop: 10, marginLeft: 10, fontSize: 25 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 95,
            marginRight: 95,
            marginTop: 20,
            fontSize: 18,
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
          <FontAwesome5 name="female" style={{ marginTop: 10, fontSize: 25 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
