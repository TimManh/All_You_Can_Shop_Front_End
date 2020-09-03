import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart/Cart";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Header from "./Header";
import Search from "./Search/Search";
const Tab = createBottomTabNavigator();

export default function Shop() {
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
              iconName = "shoppingcart";
            } else if (route.name === "Contact") {
              iconName = "contacts";
            } else if (route.name === "Search") {
              iconName = "search1";
            }

            // You can return any component that you like here!
            return (
              <Icon
                name={iconName}
                style={{ fontSize: 30, color: "#B10D65" }}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "#B10D65",
          style: {
            backgroundColor: "#79b8ff",
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Search" component={Search} />
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
