import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { FlatList } from "react-native-gesture-handler";

export default function ListProduct({ navigation, route }) {
  const { e } = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);
  const [itemId, setItemId] = useState(e);
  useEffect(() => {
    fetch(
      `http://10.0.0.231/api/product_by_type.php?id_type=${e.id}&page=${page}`
    )
      .then((res) => res.json())
      .then((resJSON) => {
        setProductList(resJSON);
      })
      .catch((err) => console.log(err));
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrowleft" style={{ fontSize: 30, color: "#B10D65" }} />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>{e.name}</Text>
        <View style={{ width: 30 }} />
      </View>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image
              style={styles.productImage}
              source={{
                uri: `http://10.0.0.231/api/images/product/${item.images[0]}`,
              }}
            />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>{item.name}</Text>
              <Text style={styles.txtPrice}>{item.price}$</Text>
              <Text style={styles.txtMaterial}>{item.material}</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>{item.color}</Text>
                <View
                  style={{
                    backgroundColor: item.color.toLowerCase(),
                    height: 16,
                    width: 16,
                    borderRadius: 8,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProductDetail", { e: item });
                  }}
                >
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => {
          setItemId(item.id_type);
          return item.id;
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);

              setPage(page + 1);
              const idType = itemId;
              console.log(itemId);
              fetch(
                `http://10.0.0.231/api/product_by_type.php?id_type=${idType}&page=${page}`
              )
                .then((res) => res.json())
                .then((resJSON) => {
                  setProductList(resJSON);
                  setRefreshing(false);
                });
            }}
          />
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 10 },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
  },
  wrapper: { backgroundColor: "#FFF", paddingHorizontal: 10 },
  titleStyle: { color: "#B10D65", fontSize: 20 },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth: 1,
  },
  productInfo: { justifyContent: "space-between", marginLeft: 15, flex: 1 },
  productImage: { width: 90, height: (90 * 452) / 361 },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtName: { color: "#BCBCBC", fontSize: 20, fontWeight: "400" },
  txtPrice: { color: "#B10D65" },
  txtShowDetail: { color: "#B10D65", fontSize: 11 },
});
