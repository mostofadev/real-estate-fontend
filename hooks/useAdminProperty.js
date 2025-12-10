import {
  deleteAdminPropertyServices,
  getAdminPropertyServices,
  postAdminPropertyServices,
  singleAdminPropertyServices,
  updateAdminPropertyServices,
} from "@/services/AdminPropertyServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";

export const useAdminProperty = () => {
  const [page, setPage] = useState(1);

  const query = useQuery({
    queryKey: ["admin-property", page],
    queryFn: () => getAdminPropertyServices(page),
    keepPreviousData: true,
  });

  return { ...query, page, setPage };
};

export const useAdminPropertySingle = (id) => {
  return useQuery({
    queryKey: ["admin-property-single", id],
    queryFn: ({ queryKey }) => {
      const [_key, propertyId] = queryKey;
      return singleAdminPropertyServices(propertyId);
    },
    enabled: !!id,
  });
};


export const useAdminPropertyPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => postAdminPropertyServices(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-property"]);
    },

    onError: () => {
      queryClient.setQueryData(["admin-property"], (old) => {
        return old;
      });
    },
  });
};

export const useAdminPropertyUpdate = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateAdminPropertyServices(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries(["admin-property"]);
    },
    onError: () => {
      queryClient.setQueryData(["admin-property"], (old) => {
        return old;
      });
    },
  });
};

export const useAdminPropertyDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteAdminPropertyServices(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-property"]);
    },
    onError: () => {
      queryClient.setQueryData(["admin-property"], (old) => {
        return old;
      });
    },
  });
};
