"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

function PropertyCard({ properties }) {
  const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

  // Check if image_url is a string (API) or imported object (local)
  console.log('property id',properties.id);
  
  const imgSrc =
    typeof properties.image_url === "string"
      ? `${STORAGE_URL}${properties.image_url}`
      : properties.image_url;

  return (
    <div className="border rounded-xl border-gray-200 shadow-md bg-[var(--bg-one)] overflow-hidden">
      {/* Image */}
      <div className="w-full relative rounded-tl-xl rounded-tr-xl overflow-hidden">
        <Image
          src={imgSrc}
          alt={properties.title || "Property Image"}
          width={400}
          height={300}
          className="w-full h-60 md:h-72 lg:h-80 object-cover"
          unoptimized={true}
        />

        {/* For Sale / For Rent Badge */}
        {properties.type && (
          <span className="absolute top-3 left-3 bg-[var(--primary-color)] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
            {properties.type}
          </span>
        )}
      </div>

      {/* Property Info */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            <Link href={`/property/${properties.id}`}>{properties.title}</Link>
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 flex gap-2 items-center my-2">
            <FaMapMarkerAlt /> {properties.full_location}
          </p>
          <span className="text-sm  text-[var(--primary-color)] font-bold">
            {properties.type === "For Rent" ? (
              <span>${properties.price}/month</span>
            ) : (
              <span>From ${properties.price}</span>
            )}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="flex justify-between p-2 border-t border-gray-100">
        <div className="flex items-center gap-1 border-r border-gray-100 pr-2">
          <FaBed className="text-gray-600" />
          <span className="text-sm text-gray-600">
            {properties.bedrooms} Bedrooms
          </span>
        </div>
        <div className="flex items-center gap-1 border-r border-gray-100 pr-2">
          <FaBath className="text-gray-600" />
          <span className="text-sm text-gray-600">
            {properties.bathrooms} Bathrooms
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaRulerCombined className="text-gray-600" />
          <span className="text-sm text-gray-600">{properties.area} sqft</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
