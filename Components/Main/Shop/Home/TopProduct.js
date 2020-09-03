import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import sp1 from "../../../../Resources/images-master/temp/sp1.jpeg";
import sp2 from "../../../../Resources/images-master/temp/sp2.jpeg";
import sp3 from "../../../../Resources/images-master/temp/sp3.jpeg";
import sp4 from "../../../../Resources/images-master/temp/sp4.jpeg";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
export default function TopProduct() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleCOntainer}>
        <Text style={styles.title}>TOP PRODUCT</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => {
            navigation.navigate("ProductDetail");
          }}
        >
          <Image source={sp1} style={styles.productImage} />
          <Text style={styles.productName}>PRODUCT NAME</Text>
          <Text style={styles.productPrice}>500$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => {
            navigation.navigate("ProductDetail");
          }}
        >
          <Image source={sp2} style={styles.productImage} />
          <Text style={styles.productName}>PRODUCT NAME</Text>
          <Text style={styles.productPrice}>450$</Text>
        </TouchableOpacity>
        <View style={{ height: 10, width }} />
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => {
            navigation.navigate("ProductDetail");
          }}
        >
          <Image source={sp3} style={styles.productImage} />
          <Text style={styles.productName}>PRODUCT NAME</Text>
          <Text style={styles.productPrice}>200$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => {
            navigation.navigate("ProductDetail");
          }}
        >
          <Image source={sp4} style={styles.productImage} />
          <Text style={styles.productName}>PRODUCT NAME</Text>
          <Text style={styles.productPrice}>300$</Text>
        </TouchableOpacity>
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
