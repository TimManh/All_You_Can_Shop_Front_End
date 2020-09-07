import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { cartArray } from "../../../CartContext";
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}
export default function CartView({ navigation }) {
  const { value, setValue } = useContext(cartArray);
  // console.log(value);
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.main}>
        {value.map((e) => (
          <View style={styles.product} key={e.e.id}>
            <Image
              source={{
                uri: `http://10.0.0.231/api/images/product/${e.e.images[0]}`,
              }}
              style={styles.productImage}
            />
            <View style={[styles.mainRight]}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.txtName}>{toTitleCase(e.e.nameType)}</Text>
                <TouchableOpacity
                  onPress={() => {
                    value.pop();
                    console.log(value);
                    setValue(value);
                  }}
                >
                  <Text style={{ color: "#969696" }}>X</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.txtPrice}>{e.e.price}$</Text>
              </View>
              <View style={styles.productController}>
                <View style={styles.numberOfProduct}>
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{e.quantity}</Text>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.showDetailContainer}
                  onPress={() =>
                    navigation.navigate("ProductDetail", { e: e.e })
                  }
                >
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
      </TouchableOpacity>
    </View>
  );
}
const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF",
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: "#79b8ff",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width,
    backgroundColor: "#DFDFDF",
  },
  checkoutTitle: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "bold",
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
    fontSize: 20,
    fontWeight: "400",
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",

    textAlign: "right",
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
