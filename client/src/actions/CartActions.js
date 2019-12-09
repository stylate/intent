import axios from "axios";

const domain = "http://localhost:8000";

const getPricing = async () => {
  const resp = await axios(domain + "/items");
  return resp.data;
};

const addItem = async id => {
  const path = domain + "/add/" + id;
  const cart = await axios.post(path); // POST /add/:id -> append to shopping cart DS
  const resp = await axios(domain + "/total"); // get total by calling GET /total
  return {
    type: "ADD",
    items: cart.data,
    total: resp.data
  };
};

const clearCart = async () => {
  await axios(domain + "/init");
  return {
    type: "INIT"
  };
};

export const CartActions = {
  addItem,
  clearCart,
  getPricing
};
