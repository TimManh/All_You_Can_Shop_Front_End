import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Entypo";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
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
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
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
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="exit-to-app" color="#B10D65" size={size} />
          )}
          label="Sign Out"
          labelStyle={{ color: "#B10D65" }}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
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
