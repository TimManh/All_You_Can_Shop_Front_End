import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <FontAwesome5 name="bars" style={{ margin: 10, fontSize: 25 }} />
      </TouchableOpacity>
    </View>
  );
}
