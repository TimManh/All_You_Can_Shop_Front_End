import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import littleIcom from "../../../../Resources/images-master/temp/little.jpg";
import maxiIcon from "../../../../Resources/images-master/temp/maxi.jpg";
import partyIcon from "../../../../Resources/images-master/temp/party.jpg";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function Category(props) {
  const navigation = useNavigation();
  const types = props.types;
  if (types.type === undefined) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Swiper showsPagination width={imageWidth} height={imageHeight}>
          {types.type.map((e) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ListProduct")}
              key={e.id}
            >
              <ImageBackground
                source={{ uri: `http://localhost/api/images/type/${e.image}` }}
                style={styles.imageStyle}
              >
                <Text style={styles.cateTitle}>{e.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>
    </View>
  );
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.32,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: "#AFAEAF",
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  cateTitle: {
    fontSize: 20,
    color: "#9A9A9A",
  },
});
