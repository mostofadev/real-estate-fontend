"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import AdminAuthServices from "@/services/AdminAuthServices";

// Login Hook
export const useAdminLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (credentials) => AdminAuthServices.login(credentials),
    onSuccess: (res) => {
      // Save token
      localStorage.setItem("admin_token", JSON.stringify(res.data.token));
      toast.success("Login successful!");
      router.push("/admin/dashboard");
    },
    onError: (error) => {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        const message = error.response?.data?.message || "An error occurred";
        toast.error(message);
      }
    },
  });
};

// Logout Hook
export const useAdminLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => AdminAuthServices.logout(),
    onSuccess: () => {
      localStorage.removeItem("admin_token");
      queryClient.clear();
      toast.success("Logged out successfully!");
      router.push("/admin/login");
    },
    onError: () => {
      toast.error("Logout failed. Try again.");
    },
  });
};
