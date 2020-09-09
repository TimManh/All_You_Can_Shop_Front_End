import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
export default function TopProduct(props) {
  const navigation = useNavigation();
  const products = props.products;
  if (products.product === undefined) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleCOntainer}>
        <Text style={styles.title}>TOP PRODUCT</Text>
      </View>
      <View style={styles.body}>
        {products.product.map((e) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => {
              navigation.navigate("ProductDetail", { e });
            }}
            key={e.id}
          >
            <Image
              source={{
                uri: `http://10.0.0.231/api/images/product/${e.images[0]}`,
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>{e.name.toUpperCase()}</Text>
            <Text style={styles.productPrice}>{e.price}$</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleCOntainer: { height: 50, justifyContent: "center", paddingLeft: 10 },
  title: { color: "#D3D3CF", fontSize: 20 },
  body: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  productContainer: {
    width: productWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  productImage: { width: productWidth, height: productImageHeight },
  productName: {
    marginVertical: 5,
    paddingLeft: 10,
    color: "#D3D3CF",
    fontWeight: "500",
  },
  productPrice: { marginBottom: 5, paddingLeft: 10, color: "#662F90" },
});
