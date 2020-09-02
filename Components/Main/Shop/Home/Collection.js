import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function Collection() {
  return (
    <View style={styles.wrapper}>
      <Text>This is Collection</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    height: height / 4,
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
});
