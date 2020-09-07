import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  RefreshControl,
  AsyncStorage,
} from "react-native";
import { cartArray } from "../../../CartContext";

import Collection from "./Collection";
import Category from "./Category";
import TopProduct from "./TopProduct";
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

// const getCart = async () => {
//   const newCart = AsyncStorage.getItem("@cart");
//   return newCart;
// };

export default function HomeView() {
  const [timefetch, settimefetch] = useState(true);
  const [types, setTypes] = useState({});
  const [products, setProducts] = useState({});
  const [refreshing, setRefreshing] = React.useState(false);
  const { value, setValue } = useContext(cartArray);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    settimefetch(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    if (timefetch === true) {
      fetch("http://10.0.0.231/api/")
        .then((res) => res.json())
        .then((resJSON) => {
          const { type, product } = resJSON;
          settimefetch(false);
          setTypes({ type });
          setProducts({ product });
          // setValue(getCart());
          // console.log(types);
        })
        .catch((error) => console.log(error));
      // navigation.navigate("Home", { types });
    }
  });
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Collection />
      <Category types={types} />
      <TopProduct products={products} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8",
  },
});
