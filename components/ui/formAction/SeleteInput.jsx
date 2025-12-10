"use client";
import React from "react";

export default function SelectInput({
  id = "select_input",
  label = "",
  options = [],
  required = false,
  className = "",
  error = "",
  // React Hook Form props
  name,
  onChange,
  onBlur,
  value,
  ref,
  ...props
}) {
  return (
    <div className={` w-full ${className}`}>
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

      <select
        id={id}
        name={name}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`py-4 px-5 outline-none border border-[0.5px] border-gray-200 rounded-xl w-full
          bg-gray-50 text-gray-900 text-sm cursor-pointer
          focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]
          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
        `}
        {...props}
      >
        <option value="">Choose an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-xs mt-1 mx-2">{error}</p>}
    </div>
  );
}
