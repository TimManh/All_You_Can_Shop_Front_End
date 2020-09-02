import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import littleIcom from "../../../../Resources/images-master/temp/little.jpg";
import maxiIcon from "../../../../Resources/images-master/temp/maxi.jpg";
import partyIcon from "../../../../Resources/images-master/temp/party.jpg";

const { width, height } = Dimensions.get("window");

export default function Category() {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Swiper>
          <ImageBackground source={littleIcom} style={styles.imageStyle}>
            <Text style={styles.cateTitle}>Little Dress</Text>
          </ImageBackground>
          <ImageBackground source={maxiIcon} style={styles.imageStyle}>
            <Text style={styles.cateTitle}>Maxi Dress</Text>
          </ImageBackground>
          <ImageBackground source={partyIcon} style={styles.imageStyle}>
            <Text style={styles.cateTitle}>Party Dress</Text>
          </ImageBackground>
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
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
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
