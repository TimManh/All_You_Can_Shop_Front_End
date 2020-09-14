import React, { useState, useContext } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Entypo";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { setSignIn } from "../global";
export default function DrawerContent(props) {
  const { user, setUser } = useContext(setSignIn);
  const logoutJSX = (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
              }}
              size={50}
            />
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>Hi There!!</Title>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ size }) => (
              <Icon name="login" color="#B10D65" size={size} />
            )}
            label="Sign In"
            labelStyle={{ color: "#B10D65" }}
            onPress={() => {
              props.navigation.navigate("Authentication");
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
  const logInJSX = (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
              }}
              size={50}
            />
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>{user ? user.user.name : ""}</Title>
              <Caption style={styles.caption}>
                @{user ? user.user.name : ""}
              </Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ size }) => (
              <Icon2 name="shop" color="#B10D65" size={size} />
            )}
            label="Shop"
            labelStyle={{ color: "#B10D65" }}
            onPress={() => {
              props.navigation.navigate("Shop");
            }}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="account-outline" color="#B10D65" size={size} />
            )}
            label="Info"
            labelStyle={{ color: "#B10D65" }}
            onPress={() => {
              props.navigation.navigate("Change Info");
            }}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon1 name="shopping-bag" color="#B10D65" size={size} />
            )}
            label="Order History"
            labelStyle={{ color: "#B10D65" }}
            onPress={() => {
              props.navigation.navigate("Order History");
            }}
          />

          <DrawerItem
            icon={({ size }) => (
              <Icon name="exit-run" color="#B10D65" size={size} />
            )}
            label="Sign Out"
            labelStyle={{ color: "#B10D65" }}
            onPress={() => {
              setUser(null);

              AsyncStorage.setItem("@token", "");
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
  const mainJSX = user ? logInJSX : logoutJSX;
  return <View style={{ flex: 1 }}>{mainJSX}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34B089",
    borderRightWidth: 3,
    borderColor: "#fff",
    alignItems: "center",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#B10D65",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
