import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export default function ProductDetail({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrowleft" style={{ fontSize: 35 }} />
      </TouchableOpacity>
    </View>
  );
}
