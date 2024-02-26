import { $authHost } from "./index";

export const fetchCart = async () => {
  const { data } = await $authHost.get("api/cart");
  return data;
};

export const addCartItem = async (cartItem) => {
  const { data } = await $authHost.post("api/cart", cartItem);
  return data;
};

export const deleteCartItem = async (id) => {
  const { data } = await $authHost.delete("api/cart/device/" + id);
  return data;
};

export const updateCartItem = async (cartItem) => {
  const { data } = await $authHost.patch(
    "api/cart/device/" + cartItem.deviceId,
    cartItem
  );
  return data;
};
