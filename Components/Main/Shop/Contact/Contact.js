import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import map from "../../../../Resources/images-master/appIcon/map.png";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/AntDesign";
export default function Contact() {
  const {
    mapContainer,
    wrapper,
    infoContainer,
    rowInfoContainer,
    iconStyle,
    infoText,
  } = styles;
  return (
    <View style={wrapper}>
      <View style={mapContainer}>
        <Image
          style={{ flex: 1, alignSelf: "stretch", width: undefined }}
          source={map}
        />
      </View>
      <View style={infoContainer}>
        <View style={rowInfoContainer}>
          <Icon1 name="location" style={iconStyle} />
          <Text style={infoText}>90 Le Thi Rieng/ Ben Thanh Dist</Text>
        </View>
        <View style={rowInfoContainer}>
          <Icon name="phone" style={iconStyle} />
          <Text style={infoText}>(+84) 01694472176</Text>
        </View>
        <View style={rowInfoContainer}>
          <Icon name="mail" style={iconStyle} />
          <Text style={infoText}>khoaphamtraining@gmail.com</Text>
        </View>
        <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
          <Icon name="message1" style={iconStyle} />
          <Text style={infoText}>(+84) 09877067707</Text>
        </View>
      </View>
    </View>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#F6F6F6" },
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: "#FFF",
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D6D6D6",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  infoText: {
    color: "#AE005E",
    fontWeight: "500",
  },
  iconStyle: {
    fontSize: 32,
    color: "#AE005E",
  },
});
