"use client";
import React from "react";

function SearchInput({ register, name, placeholder = "Search..." }) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      {...register(name)}
      className="
        px-3 py-3
        border border-gray-200 rounded
        outline-none
        focus:border-[var(--primary-color)]
        focus:bg-[var(--bg-one)]
        focus:text-[var(--primary-color)]
        transition-all duration-200
        w-full
      "
    />
  );
}

export default SearchInput;
