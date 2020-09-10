import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native-gesture-handler";

export default function OrderHistory({ navigation }) {
  const [arrOrder, setArrOrder] = useState([]);
  useEffect(() => {
    const getToken = async () => {
      try {
        const item = await AsyncStorage.getItem("@token");
        if (item !== null) {
          // console.log(item);
          return JSON.parse(item);
        }
        return "";
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    };
    getToken().then((newtoken) => {
      // console.log(newtoken);
      fetch("http://10.0.0.231/api/order_history.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ token: newtoken }),
      })
        .then((res) => res.json())
        .then((resJson) => setArrOrder(resJson))
        .catch((err) => console.log(err));
    });
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrowleft"
            style={{ fontSize: 30, color: "#B10D65", marginRight: 100 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={arrOrder}
          renderItem={({ item }) => (
            <View style={styles.orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#79b8ff" }}>ORD{item.id}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>{item.date_order}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#79b8ff" }}>
                  {item.status ? "Completed" : "Pending"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  {item.total}$
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#79b8ff",
    paddingTop: 35,
    flexDirection: "row",
    paddingHorizontal: 10,
  }, // eslint-disable-line
  headerTitle: { color: "#C21C70", fontSize: 20 },
  body: { flex: 10, backgroundColor: "#F6F6F6" },
  orderRow: {
    height: width / 3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around",
  },
});
