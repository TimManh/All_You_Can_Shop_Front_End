import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Header from "./Header";
const Tab = createBottomTabNavigator();

export default function Shop({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Cart") {
              iconName = "shopping-cart";
            } else if (route.name === "Contact") {
              iconName = "portrait";
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} style={{ fontSize: 30 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "black",
          style: {
            backgroundColor: "#79b8ff",
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79b8ff",
  },
});
