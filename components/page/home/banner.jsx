"use client";
import React from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

function Banner() {
  const router = useRouter();

  const handleSearch = (filters) => {
    const cleanedFilters = Object.fromEntries(
      Object.entries(filters).filter(([k, v]) => v)
    );
    const params = new URLSearchParams(cleanedFilters).toString();
    router.push(`/property?${params}`);
  };

  return (
    <div
      className="
        w-full 
        lg:h-[900px]
        h-[700px] 
        bg-[url('/banner.png')] 
        bg-cover 
        bg-center 
        bg-no-repeat 
        relative
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white drop-shadow-lg px-4">
          <p className="text-4xl lg:text-7xl font-bold mt-2">
            Find your best Property
          </p>
          <h1 className="text-sm lg:text-2xl mt-6 mb-5">
            Esteem spirit temper too say adieus who direct esteem.
          </h1>
          <div className="mt-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
