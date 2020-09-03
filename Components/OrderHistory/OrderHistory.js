import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
export default function OrderHistory({ navigation }) {
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
        <ScrollView>
          <View style={styles.orderRow}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Order id:
              </Text>
              <Text style={{ color: "#79b8ff" }}>ORD001</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                OrderTime:
              </Text>
              <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Status:
              </Text>
              <Text style={{ color: "#79b8ff" }}>Pending</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Total:
              </Text>
              <Text style={{ color: "#C21C70", fontWeight: "bold" }}>100$</Text>
            </View>
          </View>

          <View style={styles.orderRow}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Order id:
              </Text>
              <Text style={{ color: "#79b8ff" }}>ORD001</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                OrderTime:
              </Text>
              <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Status:
              </Text>
              <Text style={{ color: "#79b8ff" }}>Pending</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Total:
              </Text>
              <Text style={{ color: "#C21C70", fontWeight: "bold" }}>100$</Text>
            </View>
          </View>

          <View style={styles.orderRow}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Order id:
              </Text>
              <Text style={{ color: "#79b8ff" }}>ORD001</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                OrderTime:
              </Text>
              <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Status:
              </Text>
              <Text style={{ color: "#79b8ff" }}>Pending</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Total:
              </Text>
              <Text style={{ color: "#C21C70", fontWeight: "bold" }}>100$</Text>
            </View>
          </View>
          <View style={styles.orderRow}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Order id:
              </Text>
              <Text style={{ color: "#79b8ff" }}>ORD001</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                OrderTime:
              </Text>
              <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Status:
              </Text>
              <Text style={{ color: "#79b8ff" }}>Pending</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Total:
              </Text>
              <Text style={{ color: "#C21C70", fontWeight: "bold" }}>100$</Text>
            </View>
          </View>
          <View style={styles.orderRow}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Order id:
              </Text>
              <Text style={{ color: "#79b8ff" }}>ORD001</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                OrderTime:
              </Text>
              <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Status:
              </Text>
              <Text style={{ color: "#79b8ff" }}>Pending</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                Total:
              </Text>
              <Text style={{ color: "#C21C70", fontWeight: "bold" }}>100$</Text>
            </View>
          </View>
        </ScrollView>
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
