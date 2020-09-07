const { AsyncStorage } = require("react-native");

const getCart = async () => {
  const newCart = AsyncStorage.getItem("@cart");
  return newCart;
};
