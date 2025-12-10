"use client";
import React from "react";

export default function TextInput({
  id,
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  required = false,
  block = false,
  className = "",
  error = "",
  icon, 
  MarginB = true,
  ...props
}) {
  return (
    <div className={`w-full relative ${MarginB ? "mb-6" : ""} ${className}`}>
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}

      {label && (
        <label
          htmlFor={id}
          className={` text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
            peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs
          `}
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={block}
        className={` w-full rounded-lg border border-[0.5px] border-gray-100 bg-gray-50 px-4 py-3 text-gray-900 text-sm
          focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]
          ${icon ? "pl-10" : ""}
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }
        `}
        {...props}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
