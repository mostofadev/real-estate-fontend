"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoHardwareChipSharp } from "react-icons/io5";
import { useAdminLogin } from "@/hooks/useAdminAuth";
import toast from "react-hot-toast";
import NonProtectedRouteUser from "../route/NonProtestedRouteUser";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function AdminLoginPage() {
  const { mutateAsync: login, isLoading } = useAdminLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await login(data);
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Login failed. Check your credentials.");
    }
  };

  return (
    <NonProtectedRouteUser>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="w-full max-w-md p-10 rounded-3xl backdrop-blur-sm bg-white/10 border border-gray-700 shadow-xl shadow-cyan-500/20 relative z-10">
          <div className="flex flex-col items-center mb-8">
            <IoHardwareChipSharp
              className="text-cyan-400 mb-3 animate-bounce"
              size={52}
            />
            <h2 className="text-3xl font-bold text-white tracking-wide mb-1">
              Robotics Admin
            </h2>
            <p className="text-gray-300 text-sm">Secure Login Portal</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="admin@robotics.com"
                className={`w-full px-4 py-3 rounded-xl bg-gray-800 text-white border ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter password"
                className={`w-full px-4 py-3 rounded-xl bg-gray-800 text-white border ${
                  errors.password ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-cyan-400 transition`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition transform hover:scale-105 shadow-lg shadow-cyan-500/50 flex justify-center items-center gap-2"
            >
              {isLoading ? "Authenticating..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </NonProtectedRouteUser>
  );
}

export default AdminLoginPage;
