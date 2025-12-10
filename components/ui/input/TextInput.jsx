"use client";
import React from "react";

export default function TextInput({
  id,
  name,
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  onBlur,
  required = false,
  block = false,
  className = "",
  error = "",
  icon,
  bgColor = true, // true = dark, false = light
  ...props
}) {
  // Determine colors based on bgColor
  const bgClass = bgColor ? "bg-[rgba(0,0,0,0.5)] text-white border-white" : "bg-white text-gray-800 border-gray-300";
  const focusClass = bgColor
    ? "focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)]"
    : "focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className={`w-full relative ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block mb-1 font-medium ${bgColor ? "text-white" : "text-gray-700"}`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={block}
          required={required}
          className={`w-full rounded-lg border px-4 py-3 text-sm transition-colors duration-200
            ${bgClass}
            ${focusClass} focus:outline-none
            ${icon ? "pl-10" : ""}
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
          `}
          {...props}
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
