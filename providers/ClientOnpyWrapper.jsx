"use client";

import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Layout from "@/components/layout/Layout";
import AdminLayout from "@/components/layout/AdminLayout";
import ProtectedRouteUser from "@/app/route/ProtestedRouteUser";

export default function ClientOnlyWrapper({ children }) {
  const queryClient = new QueryClient();
  const pathname = usePathname() || "";
  const isAdminPage = pathname.startsWith("/admin");

  const content = (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <ToastContainer position="top-right" autoClose={300} />
      {children}
    </QueryClientProvider>
  );

  return isAdminPage ? (
    <ProtectedRouteUser>
      <AdminLayout>{content}</AdminLayout>
    </ProtectedRouteUser>
  ) : (
    <Layout>{content}</Layout>
  );
}
