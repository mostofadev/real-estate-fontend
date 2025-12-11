"use client";

import BannerSection from "@/components/layout/BannerSection";
import SearchBar from "@/components/page/home/SearchBar";
import MarginSection from "@/components/section/MarginSection";
import PropertyCard from "@/components/ui/card/PropertyCard";
import { filterProperties } from "@/services/HomeServices";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PropertyPage() {
  const [properties, setProperties] = useState([]);
  const [count, setCount] = useState(0);
  const searchParams = useSearchParams();

  const handleSearch = async (filters) => {
    const res = await filterProperties(filters);
    setProperties(res.data);
    setCount(res.count);
  };

  useEffect(() => {
    const fetchFromParams = () => {
      const filters = {};
      for (const [key, value] of searchParams.entries()) {
        if (value) filters[key] = value;
      }
      if (Object.keys(filters).length > 0) {
        handleSearch(filters);
      }
    };

    const timer = setTimeout(fetchFromParams, 0);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
      <>
        <div className="relative w-full">
          <BannerSection Title="Search property" />

          <div className="absolute left-0 right-0 flex justify-center px-4 bottom-[25px] lg:bottom-[-80px] z-20">
            <MarginSection>
              <SearchBar color={false} onSearch={handleSearch} />
            </MarginSection>
          </div>
        </div>

        <div className="mt-28 sm:mt-32 md:mt-44 lg:mt-52 mb-32">
          <MarginSection>
            <h2 className="text-center my-10 sm:my-14 text-[var(--secondary-color)] text-3xl sm:text-4xl font-bold">
              {count} Properties found
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {properties.map((item, idx) => (
                <PropertyCard
                  key={idx}
                  properties={{
                    title: item.title,
                    image_url: item.image,
                    price: item.price,
                    full_location: item.location,
                    bedrooms: item.bed_room,
                    bathrooms: item.bath_room,
                    area: item.sqft,
                  }}
                />
              ))}
            </div>
          </MarginSection>
        </div>
      </>
  );
}
