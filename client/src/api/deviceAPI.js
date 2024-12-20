import { $authHost, $host } from "./index";

// **********************
// only authorized host
// **********************
export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const deleteOneDevice = async (id) => {
  const { data } = await $authHost.delete("api/device/" + id);
  return data;
};

// ************
// all hosts
// ************

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchDevicesById = async (ids) => {
  const { data } = await $host.get("api/device/devices", {
    params: {
      id: ids,
    },
    paramsSerializer: { indexes: null },
  });
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
