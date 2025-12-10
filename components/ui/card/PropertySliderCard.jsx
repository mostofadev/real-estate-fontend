"use client";

import { Description } from "@headlessui/react";
import React from "react";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import PrimaryButton from "../button/PrimaryButton";

export default function PropertySliderCard({ properties }) {
  return (
    <div className="w-full bg-white w-[300px] rounded-xl shadow-lg p-6 mt-10 max-w-5xl relative">
      {/* For Sale Badge */}
      <span className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[var(--primary-color)]  text-white py-2 px-4 rounded-md text-sm font-semibold shadow-md">
        {properties.property_status === "for_sale" ? "For Sale" : "For Rent"}
      </span>

      {/* Header */}
      <div className="text-center mt-6">
        <h3 className="text-2xl font-semibold">{properties.title}</h3>

        <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mt-1">
          <FaMapMarkerAlt />
          <span>{properties.location}</span>
        </div>
      </div>

      {/* Property Info */}
      <div className="mt-5">
        <ul className="flex justify-between text-gray-600 text-sm">
          <li className="flex items-center gap-2">
            <FaRulerCombined className="text-[var(--primary-color)]" />
            <span>{properties.sqft} Sqft</span>
          </li>

          <li className="flex items-center gap-2">
            <FaBed className="text-[var(--primary-color)]" />
            <span>{properties.bed_room} Bed</span>
          </li>

          <li className="flex items-center gap-2">
            <FaBath className="text-[var(--primary-color)]" />
            <span>{properties.bath_room} Bath</span>
          </li>
        </ul>

        {/* Short Description */}
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          {properties.short_description}
        </p>

        {/* Price + View Details */}
        <div className="flex justify-between items-center mt-5">
          <span className="text-xl font-bold text-[var(--primary-color)]">
            {properties.price}
          </span>

          <PrimaryButton
            href={`/property/${properties.id}`}
            text="View Details"
          />
        </div>
      </div>
    </div>
  );
}
