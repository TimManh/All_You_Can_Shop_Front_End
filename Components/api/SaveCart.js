const { cartArray } = require("../CartContext");
const { AsyncStorage } = require("react-native");

const saveCart = async (cartArray) => {
  await AsyncStorage.setItem("@cart", JSON.stringify(cartArray));
};
