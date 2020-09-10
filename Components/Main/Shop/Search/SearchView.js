import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  Dimensions,
} from "react-native";
import sp1 from "../../../../Resources/images-master/temp/sp1.jpeg";
import sp4 from "../../../../Resources/images-master/temp/sp4.jpeg";
import { FlatList } from "react-native-gesture-handler";
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
export default function SearchView({ route, navigation }) {
  const {
    product,
    mainRight,
    txtMaterial,
    txtColor,
    txtName,
    txtPrice,
    productImage,
    txtShowDetail,
    showDetailContainer,
    wrapper,
  } = styles;
  const { test } = route.params;
  if (test === null) {
    return null;
  }
  // console.log(test);
  return (
    <FlatList
      data={test}
      renderItem={({ item }) => (
        <View style={product}>
          <Image
            source={{
              uri: `http://10.0.0.231/api/images/product/${item.images[0]}`,
            }}
            style={productImage}
          />
          <View style={mainRight} key={item.id_type}>
            <Text style={txtName}>{toTitleCase(item.name)}</Text>
            <Text style={txtPrice}>{item.price}$</Text>
            <Text style={txtMaterial}>Material {item.material}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={txtColor}>Color {item.color}</Text>
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: item.color.toLowerCase(),
                  borderRadius: 15,
                  marginLeft: 10,
                }}
              />
            </View>
            <TouchableOpacity
              style={showDetailContainer}
              onPress={() => {
                navigation.navigate("ProductDetail", { e: item });
              }}
            >
              <Text style={txtShowDetail}>SHOW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F6F6F6",
    flex: 1,
  },
  product: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: "center",
  },
  mainRight: {
    flex: 3,
    justifyContent: "space-between",
  },
  productController: {
    flexDirection: "row",
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  txtName: {
    paddingLeft: 20,
    color: "#A7A7A7",
    fontSize: 20,
    fontWeight: "400",
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
  },
  txtColor: {
    paddingLeft: 20,
    color: "black",
    fontSize: 15,
    fontWeight: "400",
  },
  txtMaterial: {
    paddingLeft: 20,
    color: "black",
    fontSize: 15,
    fontWeight: "400",
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",

    textAlign: "right",
  },
  showDetailContainer: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: 100,
  },
});
