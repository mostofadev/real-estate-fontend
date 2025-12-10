"use client";

import PropertyImageSlider from "@/components/page/propertySingle/PropertyImageSlider";
import MarginSection from "@/components/section/MarginSection";
import React from "react";
import {
  FaBath,
  FaBed,
  FaMapMarkerAlt,
  FaRulerCombined,
} from "react-icons/fa";
import ContactUs from "@/components/page/propertySingle/PropertyContactUs";
import { useSingleProperty } from "@/hooks/useHomePage";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  console.log(id);
  
const { data, isLoading } = useSingleProperty(id);
console.log('single',data);


  if (isLoading)
    return (
      <p className="text-center py-20 text-xl">Loading property details...</p>
    );

  if (!data)
    return (
      <p className="text-center py-20 text-xl text-red-500">
        Property not found!
      </p>
    );

  const property = data?.data;

  return (
    <>
      <div className="bg-[var(--secondary-color)] w-full">
        <MarginSection>
          <div className="py-12 lg:py-40">
            {/* Title + Price */}
            <div className="flex justify-between lg:flex-row flex-col">
              <h2 className="text-3xl text-white">{property?.title}</h2>
              <p className="text-3xl text-[var(--primary-color)]">
                ${property?.price}
              </p>
            </div>

            {/* Location + Contact */}
            <div className="flex justify-between lg:flex-row flex-col my-3">
              <p className="text-sm text-gray-300 flex gap-2 items-center">
                <FaMapMarkerAlt /> {property?.location}
              </p>
              <p className="text-sm border border-[var(--primary-color)] text-[var(--primary-color)] py-2 px-6 rounded-full hover:bg-[var(--primary-color)] hover:text-white cursor-pointer">
                {property?.contact_info?.phone ?? "+10 367 457 735"}
              </p>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 text-gray-200 my-4">
              <div className="flex items-center gap-2">
                <FaRulerCombined className="text-[var(--primary-color)]" />
                <span>{property?.sqft} Sqft</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBed className="text-[var(--primary-color)]" />
                <span>{property?.bed_room} Bed</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBath className="text-[var(--primary-color)]" />
                <span>{property?.bath_room} Bath</span>
              </div>
            </div>
          </div>
        </MarginSection>
      </div>

      {/* Image Slider */}
      <div className="lg:mt-[-120px] mt-[0px]">
        <MarginSection responsiveMargin={false}>
          <div className="mx-0 lg:mx-20">
            <PropertyImageSlider images={property?.images} />
          </div>

          {/* Description */}
          <div className="mx-2 lg:mx-20 my-12">
            <h2 className="text-3xl font-semibold">Description</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-2">
              {property?.full_description}
            </p>
          </div>

          {/* Contact Form */}
          <div className="mx-2 lg:mx-20 lg:my-12">
            <ContactUs location={property.location} data={property?.contact_info} propertyId={property.id}/>
          </div>
        </MarginSection>
      </div>
    </>
  );
}
