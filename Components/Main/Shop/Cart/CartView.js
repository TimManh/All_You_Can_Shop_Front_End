import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CartView({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetail");
        }}
      >
        <Text> Go to product detail</Text>
      </TouchableOpacity>
    </View>
  );
}
