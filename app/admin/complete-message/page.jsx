"use client";
import React from "react";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import AdminTItle from "@/components/admin/AdminTItle";
import DynamicTable from "@/components/table/DynamicTable";
import {
  useAdminMessageDelete,
  useAdminMessageStatusUpdate,
  useAdminReadMessage,
} from "@/hooks/useAdminMessage";

export default function Page() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error, page, setPage } =
    useAdminReadMessage();
  const { mutate: DeleteMessage, error: DeleteError } = useAdminMessageDelete();
  const {mutate: UpdateMessageStatus, error: UpdateError} = useAdminMessageStatusUpdate();
  console.log("Message lol", data?.data);

  const messages = (data?.data?.data || []).map((item) => ({
    id: item.id,
    message: item.send_message,
    email: item.email,
    title: item.property?.title || "",
  }));

  const pagination = data?.data
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
    console.log('update status',id);
    
    // router.push(`/admin/property/update/${id}`);  
    const formData = new FormData();

      formData.append("_method", "PUT");

    UpdateMessageStatus({id, data: formData}, {
      onSuccess: () => {
        queryClient.invalidateQueries(["send-message", page]);
      },
    });
  };
  const handleDelete = (id) => {
    console.log('delete id',id);
    
    DeleteMessage(id, {
      onSuccess: () => {
        const remainingItems = data?.data.length - 1;
        if (remainingItems === 0 && page > 1) {
          setPage(page - 1);
        } else {
          queryClient.invalidateQueries(["send-message", page]);
        }
      },
    });
  };

  const columns = [
    { header: "ID", field: "id" },
    { header: "Message", field: "message" },
    { header: "Email", field: "email" },
    { header: "Title", field: "title" },
  ];

  return (
    <div className="p-6">
      <div className="my-3">
        <AdminTItle
          title="New Messages Table"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-48">Loading....</div>
      ) : isError ? (
        <p className="text-red-500">
          Error: {error?.message || "Failed to load"}
        </p>
      ) : (
        <DynamicTable
          columns={columns}
          data={messages}
          pagination={pagination}
          onPageChange={handlePageChange}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
