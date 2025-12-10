import UserInstance from "@/lib/userAxios";
import { userAgent } from "next/server";

export const getHomePageProperty = async () => {
  const response = await UserInstance.get("/properties/latest");
  console.log(response);

  return response.data;
};
export const filterProperties = async (params) => {
  const response = await UserInstance.get("/filter", {
    params,
  });
  return response.data;
};

export const singlePropertyServices = async ({ id }) => {
  const response = await UserInstance.get(`/properties/${id}`);
  return response.data;
};


export const getSliderPropertyServices = async () => {
  const response = await UserInstance.get("/slider");
  console.log(response);

  return response.data;
};