"use client";
import React from "react";

export default function TextArea({
  id = "textarea_input",
  label = "",
  placeholder = "",
  rows = 4,
  required = false,
  className = "",
  error = "",
  // নিচের props গুলো React Hook Form register() থেকে আসবে
  name,
  onChange,
  onBlur,
  value,
  ref,
  ...props
}) {
  return (
    <div className={`my-4 w-full ${className}`}>
      {label && (
        <div className="my-2">
          <label
            htmlFor={id}
            className="mx-2 text-[12px] font-medium text-gray-900 dark:text-white"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}

      <textarea
        id={id}
        name={name}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`py-4 px-5 outline-none w-full rounded-xl border-[0.5px]
          border-gray-200 text-gray-900 text-sm
          bg-gray-50
          focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]
          dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
        `}
        {...props}
      ></textarea>

      {error && <p className="text-red-500 text-xs mt-1 mx-2">{error}</p>}
    </div>
  );
}
