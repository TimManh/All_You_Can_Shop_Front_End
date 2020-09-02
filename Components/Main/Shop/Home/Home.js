import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Collection />
      <Category />
      <TopProduct />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
});
