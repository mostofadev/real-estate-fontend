"use client";
import React from "react";

export default function Form({ children, onSubmit, className = "", ...props }) {
  return (
    <form
      className={`w-full p-6 bg-white border border-[0.5px] border-gray-100 rounded-xl shadow-md ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      {...props}
    >
      {children}
    </form>
  );
}
