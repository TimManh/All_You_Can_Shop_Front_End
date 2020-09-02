import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Collection />
      <Category /> */}
      <TopProduct />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
});
