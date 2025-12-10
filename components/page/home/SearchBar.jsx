"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import SelectInput from "@/components/ui/input/SelectInput";
import TextInput from "@/components/ui/input/TextInput";
import { FiHome, FiUser, FiDroplet } from "react-icons/fi";

const SearchSchema = z.object({
  location: z.string().optional(),
  property_type: z.string().optional(),
  bed_room: z.string().optional(),
  bath_room: z.string().optional(),
});

export default function SearchBar({ color = true, onSearch }) {
  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      location: "",
      property_type: "",
      bed_room: "",
      bath_room: "",
    },
  });

  const onSubmit = (data) => {
    onSearch?.(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${color ? "bg-[rgba(0,0,0,0.5)]" : "bg-[var(--secondary-color)]"}
        shadow-xl rounded-2xl px-12 py-12
        flex items-center lg:flex-row flex-col gap-6 w-full`}
    >
      {/* Location */}
      <div className="w-full">
        <TextInput placeholder="Enter location" {...register("location")} />
      </div>

      {/* Type */}
      <div className="w-full">
        <SelectInput
          Icon={<FiHome />}
          placeholder="Type"
          onChange={(v) => setValue("property_type", v)}
          options={[
            { id: 1, label: "House", value: "house" },
            { id: 2, label: "Apartment", value: "apartment" },
            { id: 3, label: "Office", value: "office" },
          ]}
        />
      </div>

      {/* Bedroom */}
      <div className="w-full">
        <SelectInput
          Icon={<FiUser />}
          placeholder="Bedroom"
          onChange={(v) => setValue("bed_room", v)}
          options={[
            { id: 1, label: "1 Bedroom", value: "1" },
            { id: 2, label: "2 Bedroom", value: "2" },
            { id: 3, label: "3 Bedroom", value: "3" },
            { id: 4, label: "4+ Bedroom", value: "4" },
          ]}
        />
      </div>

      {/* Bathroom */}
      <div className="w-full">
        <SelectInput
          Icon={<FiDroplet />}
          placeholder="Bathroom"
          onChange={(v) => setValue("bath_room", v)}
          options={[
            { id: 1, label: "1 Bathroom", value: "1" },
            { id: 2, label: "2 Bathroom", value: "2" },
            { id: 3, label: "3 Bathroom", value: "3" },
          ]}
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-[var(--primary-color)] text-white px-8 h-12 rounded-xl 
        font-semibold shadow-md flex items-center whitespace-nowrap w-full lg:w-auto justify-center"
      >
        Search
      </button>
    </form>
  );
}
