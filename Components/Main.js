import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>This Main</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
