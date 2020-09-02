import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import bannerImage from "../../../../Resources/images-master/temp/banner.jpg";
const { width, height } = Dimensions.get("window");

export default function Collection() {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.textStyle}>SPRING COLLECTION</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Image source={bannerImage} style={styles.imageStyle} />
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
  },
});
