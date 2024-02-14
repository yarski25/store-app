import { $authHost } from "./index";

export const fetchCart = async () => {
  const { data } = await $authHost.get("api/cart");
  return data;
};

export const addCartItem = async (cartItem) => {
  const { data } = await $authHost.post("api/cart", cartItem);
  return data;
};
