import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Collection from "./Collection";
export default function Home() {
  return (
    <View style={styles.container}>
      <Collection />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
});
