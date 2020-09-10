import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const [txtSearch, setTxtSearch] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Icon
            name="menu"
            style={{ marginTop: 10, fontSize: 35, color: "#B10D65" }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            color: "#B10D65",
          }}
        >
          ALL YOU CAN SHOP
        </Text>

        <FontAwesome5
          name="female"
          style={{ marginTop: 20, fontSize: 30, color: "#B10D65" }}
        />
      </View>
      <TextInput
        style={{
          backgroundColor: "#FFF",
          marginTop: 10,
          fontSize: 17,
          paddingLeft: 10,
        }}
        placeholder="Find products"
        onChangeText={(text) => setTxtSearch(text)}
        onSubmitEditing={() => {
          fetch(`http://10.0.0.231/api/search.php?key=${txtSearch}`)
            .then((res) => res.json())
            .then((arrProduct) => {
              navigation.navigate("Search", {
                screen: "SearchView",
                params: { test: arrProduct },
              });
            })
            .catch((err) => console.log(err));
        }}
      />
    </View>
  );
}
