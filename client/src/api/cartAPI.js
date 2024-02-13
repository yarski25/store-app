import { $authHost } from "./index";

export const fetchCart = async () => {
  const { data } = await $authHost.get("api/cart");
  return data;
};
