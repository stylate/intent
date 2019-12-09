import axios from "axios";

const domain = "http://localhost:8000";

const getPricing = async () => {
  try {
    const resp = await axios(domain + "/items");
    return resp.data;
  } catch (e) {
    return {};
  }
};

const addItem = async id => {
  const path = domain + "/add/" + id;
  let cart;
  let currentPrice;
  try {
    cart = await axios.post(path);
    currentPrice = await axios(domain + "/total");
  } catch (e) { // unable to add item to shopping cart. reset to initial state
    return {
      type: "INIT"
    };
  }
  return {
    type: "ADD",
    items: cart.data,
    total: currentPrice.data
  };
};

const clearCart = async () => {
  try {
    await axios(domain + "/init");
  } catch (e) {
    // clear failed. reset front-end anyway by skipping to return statement
  }
  return {
    type: "INIT"
  };
};

export const CartActions = {
  addItem,
  clearCart,
  getPricing
};
