import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import sp1 from "../../../../Resources/images-master/temp/sp1.jpeg";
import sp2 from "../../../../Resources/images-master/temp/sp2.jpeg";

import sp3 from "../../../../Resources/images-master/temp/sp3.jpeg";

export default function ListProduct({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrowleft" style={{ fontSize: 35 }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetail");
        }}
      >
        <Icon name="arrowright" style={{ fontSize: 35 }} />
      </TouchableOpacity> */}
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="arrowleft" style={{ fontSize: 30, color: "#B10D65" }} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Party Dress</Text>
          <View style={{ width: 30 }} />
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp1} />
          <View style={styles.productInfo}>
            <Text style={styles.txtName}>Lace Sleeve Si</Text>
            <Text style={styles.txtPrice}>117$</Text>
            <Text style={styles.txtMaterial}>Material silk</Text>
            <View style={styles.lastRowInfo}>
              <Text style={styles.txtColor}>Color RoyalBlue</Text>
              <View
                style={{
                  backgroundColor: "#4169e1",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp2} />
          <View style={styles.productInfo}>
            <Text style={styles.txtName}>Lace Sleeve Si</Text>
            <Text style={styles.txtPrice}>117$</Text>
            <Text style={styles.txtMaterial}>Material silk</Text>
            <View style={styles.lastRowInfo}>
              <Text style={styles.txtColor}>Color RoyalBlue</Text>
              <View
                style={{
                  backgroundColor: "#4169e1",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={sp3} />
          <View style={styles.productInfo}>
            <Text style={styles.txtName}>Lace Sleeve Si</Text>
            <Text style={styles.txtPrice}>117$</Text>
            <Text style={styles.txtMaterial}>Material silk</Text>
            <View style={styles.lastRowInfo}>
              <Text style={styles.txtColor}>Color RoyalBlue</Text>
              <View
                style={{
                  backgroundColor: "#4169e1",
                  height: 16,
                  width: 16,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity>
                <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#DBDBD8", padding: 10 },
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
  txtColor: {},
  txtName: { color: "#BCBCBC", fontSize: 20, fontWeight: "400" },
  txtMaterial: {},
  txtPrice: { color: "#B10D65" },
  txtShowDetail: { color: "#B10D65", fontSize: 11 },
});
