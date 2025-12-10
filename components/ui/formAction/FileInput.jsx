"use client";
import React, { useState, useEffect } from "react";

export default function FileInput({
  image_url = "",
  id = "file_input",
  label = "",
  name = "",
  required = false,
  multiple = false,
  accept = "*",
  className = "",
  error = "",
  ...rest
}) {
  const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

  const [previews, setPreviews] = useState([]);
  const [hasNewImage, setHasNewImage] = useState(false);
  useEffect(() => {
    if (!hasNewImage && previews.length === 0) {
      if (Array.isArray(image_url)) {
        const urls = image_url.map((url) => `${storageUrl}${url}`);
        setTimeout(() => setPreviews(urls), 0);
        return;
      }

      if (typeof image_url === "string" && image_url !== "") {
        setTimeout(() => setPreviews([`${storageUrl}${image_url}`]), 0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image_url, hasNewImage]);

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(fileArray);
      setHasNewImage(true);
      if (rest.onChange) {
        if (multiple) {
          rest.onChange(Array.from(files));
        } else {
          rest.onChange(files[0]);
        }
      }
    }
  };

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

      <input
        {...rest}
        type="file"
        id={id}
        name={name}
        required={required}
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        className={`py-4 px-5 outline-none border border-[0.5px] border-gray-200 rounded-xl w-full cursor-pointer
          bg-gray-50 text-gray-900 text-sm
          focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)]
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }`}
      />

      {error && <p className="text-red-500 text-xs mt-1 mx-2">{error}</p>}
      {previews.length > 0 && (
        <div className="flex flex-wrap mt-3 gap-3">
          {previews.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`preview-${idx}`}
              className="w-24 h-24 object-cover rounded-lg border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
