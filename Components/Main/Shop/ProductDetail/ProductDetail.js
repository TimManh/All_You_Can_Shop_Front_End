import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { cartArray } from "../../../CartContext";

export default function ProductDetail({ route, navigation }) {
  const {
    wrapper,
    cardStyle,
    header,
    footer,
    backStyle,
    imageContainer,
    cartStyle,
    textBlack,
    textSmoke,
    textHighlight,
    textMain,
    titleContainer,
    descContainer,
    productImageStyle,
    descStyle,
    txtMaterial,
    txtColor,
  } = styles;
  const { e } = route.params;
  const { value, setValue } = useContext(cartArray);
  return (
    <View style={wrapper}>
      <View style={cardStyle}>
        <View style={header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" style={backStyle} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setValue(value.concat({ e: e, quantity: 1 }));
              navigation.navigate("Cart");
            }}
          >
            <Icon name="shoppingcart" style={cartStyle} />
          </TouchableOpacity>
        </View>
        <View style={imageContainer}>
          <ScrollView
            style={{ flexDirection: "row", padding: 10, height: swiperHeight }}
            horizontal
          >
            <Image
              source={{
                uri: `http://10.0.0.231/api/images/product/${e.images[0]}`,
              }}
              style={productImageStyle}
            />
            <Image
              source={{
                uri: `http://10.0.0.231/api/images/product/${e.images[1]}`,
              }}
              style={productImageStyle}
            />
          </ScrollView>
        </View>
        <View style={footer}>
          <View style={titleContainer}>
            <Text style={textMain}>
              <Text style={textBlack}>{e.name.toUpperCase()}</Text>
              <Text style={textHighlight}> / </Text>
              <Text style={textSmoke}>{e.price}$</Text>
            </Text>
          </View>
          <View style={descContainer}>
            <Text style={descStyle}>{e.description}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 15,
              }}
            >
              <Text style={txtMaterial}>Material {e.material}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={txtColor}>Color {e.color}</Text>
                <View
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: e.color.toLowerCase(),
                    borderRadius: 15,
                    marginLeft: 10,
                    borderWidth: 1,
                    borderColor: "#C21C70",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const { width } = Dimensions.get("window");
const swiperWidth = width / 1.8 - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D6D6D6",
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  cartStyle: {
    fontSize: 35,
    color: "#C21C70",
  },
  backStyle: {
    color: "#C21C70",

    fontSize: 35,
  },
  productStyle: {
    width: width / 2,
    height: width / 2,
  },
  footer: {
    flex: 6,
  },
  imageContainer: {
    flex: 6,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  textMain: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  textBlack: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3F3F46",
  },
  textSmoke: {
    fontSize: 20,
    color: "#9A9A9A",
  },
  textHighlight: {
    fontSize: 20,
    color: "#7D59C8",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#F6F6F6",
    marginHorizontal: 20,
    paddingBottom: 5,
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  descStyle: {
    color: "#AFAFAF",
  },
  linkStyle: {
    color: "#7D59C8",
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5,
  },
  mainRight: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
  },
  txtColor: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
  },
  txtMaterial: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
  },
});
