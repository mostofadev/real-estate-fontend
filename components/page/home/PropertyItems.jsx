"use client";
import PropertyCard from "@/components/ui/card/PropertyCard";
import MarginSection from "@/components/section/MarginSection";
import { useHomePageProperty } from "@/hooks/useHomePage";

export default function PropertyItems() {
  const { data, isLoading, error } = useHomePageProperty();

  // API data extract
  const properties = data?.data ?? [];

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Failed to load properties</p>;

  return (
    <MarginSection>
      <div className="lg:px-8 px-2 mt-32">
        <h1 className="text-5xl font-bold mb-6 text-center">Popular Properties</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((item, idx) => (
            <PropertyCard
              key={idx}
              properties={{
                id : item.id,
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
      </div>
    </MarginSection>
  );
}
