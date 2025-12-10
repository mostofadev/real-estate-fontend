"use client";
import React from "react";

export default function Checkbox({
  id = "checkbox_input",
  label = "",
  checked = false,
  onChange,
  required = false,
  error = "",
  className = "",
  ...props
}) {
  return (
    <div className={`flex items-center mb-4 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        required={required}
        className={`w-3 h-3 text-[12px] bg-gray-100 border-gray-300 rounded-sm 
          `}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="ms-2 text-[12px] font-medium text-gray-900"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {error && (
        <p className="text-red-500 text-xs mt-1 ms-6">{error}</p>
      )}
    </div>
  );
}
