"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  filterProperties,
  getHomePageProperty,
  getSliderPropertyServices,
  postSendMessageServices,
  singlePropertyServices,
} from "@/services/HomeServices";

export const useHomePageProperty = () => {
  return useQuery({
    queryKey: ["HomeProperty"],
    queryFn: getHomePageProperty,
  });
};


export const useFilterProperties = (params) => {
  return useQuery({
    queryKey: ["FilteredProperties", params],
    queryFn: () => filterProperties(params),
    enabled: false,
  });
};

export const useSingleProperty = (id) => {
  return useQuery({
    queryKey: ["property-single", id],
    queryFn: ({ queryKey }) => {
      const [, propertyId] = queryKey;
      return singlePropertyServices({ id: propertyId });
    },
    enabled: !!id,
  });
};



export const useSliderProperty = () => {
  return useQuery({
    queryKey: ["SliderProperty"],
    queryFn: getSliderPropertyServices,
  });
};