import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>This is Contact</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
