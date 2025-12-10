"use client";
import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import AdminTItle from "@/components/admin/AdminTItle";
import DynamicTable from "@/components/table/DynamicTable";
import { useAdminProperty, useAdminPropertyDelete } from "@/hooks/useAdminProperty";

export default function Page() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error, page, setPage } = useAdminProperty();
  const { mutate: DeleteProperty, error: DeleteError } =
    useAdminPropertyDelete();

  console.log("property lol", data);

  const properties = data?.data || [];
  const pagination = data
    ? {
        current_page: Number(data.current_page || 1),
        per_page: Number(data.per_page || 10),
        last_page: Number(data.last_page || 1),
        total: Number(data.total || 0),
      }
    : null;

  const handlePageChange = (newPage) => {
    if (!pagination) return;
    if (newPage < 1 || newPage > pagination.last_page) return;
    setPage(newPage);
  };
 
   const handleUpdate = (id) => {
    router.push(`/admin/property/update/${id}`);
  };
  const handleDelete = (id) => {
    DeleteProperty(id, {
      onSuccess: () => {
        const remainingItems = data?.data.length - 1;
        if (remainingItems === 0 && page > 1) {
          setPage(page - 1);
        } else {
          queryClient.invalidateQueries(["admin-property", page]);
        }
      },
    });
  };

  const columns = [
    { header: "ID", field: "id" },
    { header: "Property Title", field: "title" },
    { header: "Price", field: "price" },
    { header: "Full Location", field: "location" },
    { header: "Image", field: "image" },
  ];

  return (
    <div className="p-6">
      <div className="my-3">
        <AdminTItle
          title="Properties Table"
          text="Add New"
          href="/admin/property/create"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          Loading....
        </div>
      ) : isError ? (
        <p className="text-red-500">
          Error: {error?.message || "Failed to load"}
        </p>
      ) : (
        <DynamicTable
          columns={columns}
          data={properties}
          pagination={pagination}
          onPageChange={handlePageChange}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          imageField={"image"}
        />
      )}
    </div>
  );
}
