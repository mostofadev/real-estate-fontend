import UserInstance from "@/lib/userAxios";

export const getAdminPropertyServices = async (page = 1) => {
  const res = await UserInstance.get(`/admin/properties?page=${page}`);
  return res.data;
};

export const singleAdminPropertyServices = async (id) => {
  const res = await UserInstance.get(`/admin/properties/${id}`);
  return res.data;
};

export const postAdminPropertyServices = async (data) => {
  const res = await UserInstance.post("/admin/properties", data);
  console.log(res);

  return res.data;
};

export const updateAdminPropertyServices = async (id, data) => {
  console.log("Data received in service:");

  if (data instanceof FormData) {
    for (let [key, value] of data.entries()) {
      console.log("from data services", key, value);
    }
  } else {
    console.log(data);
  }

  const res = await UserInstance.post(`/admin/properties/${id}`, data);

  console.log("API response:", res);

  return res.data;
};

export const deleteAdminPropertyServices = async (id) => {
  const res = await UserInstance.delete(`/admin/properties/${id}`);
  return res.data;
};
