import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";

export default function HomeView() {
  const [types, setTypes] = useState({});
  useEffect(() => {
    fetch("http://10.0.0.231/api/")
      .then((res) => res.json())
      .then((resJSON) => {
        const { type } = resJSON;
        setTypes({ type });
        // console.log(types);
      })
      .catch((error) => console.log(error));
    // navigation.navigate("Home", { types });
  });
  return (
    <ScrollView style={styles.container}>
      <Collection />
      <Category types={types} />
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
