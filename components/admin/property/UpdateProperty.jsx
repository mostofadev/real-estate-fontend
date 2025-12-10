"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import FileInput from "@/components/ui/formAction/FileInput";
import Form from "@/components/ui/formAction/Form";
import SelectInput from "@/components/ui/formAction/SeleteInput";
import TextArea from "@/components/ui/formAction/TextAreaInput";
import TextInput from "@/components/ui/formAction/TextInput";
import {
  useAdminPropertySingle,
  useAdminPropertyUpdate,
} from "@/hooks/useAdminProperty";
import { PropertyUpdateSchema } from "@/schemas/PropertyUpdateSchema";

export default function UpdateProperty({ propertyId }) {
  const router = useRouter();
  const { data: property, isLoading } = useAdminPropertySingle(propertyId);
  const { mutateAsync, isPending } = useAdminPropertyUpdate(propertyId);

  const [mainPreview, setMainPreview] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PropertyUpdateSchema),
    defaultValues: {
      title: "",
      price: "",
      location: "",
      bed_rooms: "",
      bath_rooms: "",
      sqft: "",
      property_type: "",
      property_status: "",
      short_description: "",
      full_description: "",
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      image: null,
      image_gallery: [],
    },
  });

  const imageFile = watch("image");
  const galleryFiles = watch("image_gallery");

  useEffect(() => {
    if (property) {
      reset({
        title: property.title || "",
        price: property.price || "",
        location: property.location || "",
        bed_rooms: property.bed_room?.toString() || "",
        bath_rooms: property.bath_room?.toString() || "",
        sqft: property.sqft?.toString() || "",
        property_type: property.property_type || "",
        property_status: property.property_status || "",
        short_description: property.short_description || "",
        full_description: property.full_description || "",
        contact_name: property.contact_info?.name || "",
        contact_email: property.contact_info?.email || "",
        contact_phone: property.contact_info?.phone || "",
        image: null,
        image_gallery: [],
      });

      // Set existing image previews
      if (property.image) {
        setMainPreview(property.image);
      }
      if (property.images && property.images.length > 0) {
        setGalleryPreview(property.images.map((img) => img.image_url));
      }
    }
  }, [property, reset]);

  // Preview main image when selected
  useEffect(() => {
    if (imageFile && imageFile.length > 0 && imageFile[0] instanceof File) {
      const url = URL.createObjectURL(imageFile[0]);
      setMainPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile]);

  // Preview gallery images when selected
  useEffect(() => {
    if (galleryFiles && galleryFiles.length > 0) {
      const validFiles = Array.from(galleryFiles).filter(
        (f) => f instanceof File
      );
      if (validFiles.length > 0) {
        const urls = validFiles.map((f) => URL.createObjectURL(f));
        setGalleryPreview(urls);
        return () => urls.forEach((url) => URL.revokeObjectURL(url));
      }
    }
  }, [galleryFiles]);

  const submitFormData = async (data) => {
    console.log("submit form data", data);

    try {
      const formData = new FormData();

      formData.append("_method", "PUT");

      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("location", data.location);
      formData.append("bed_room", data.bed_rooms);
      formData.append("bath_room", data.bath_rooms);
      formData.append("sqft", data.sqft);
      formData.append("property_type", data.property_type);
      formData.append("property_status", data.property_status);
      formData.append("short_description", data.short_description || "");
      formData.append("full_description", data.full_description || "");

      formData.append("contact_name", data.contact_name || "");
      formData.append("contact_email", data.contact_email || "");
      formData.append("contact_number", data.contact_phone || "");
      if (
        data.image &&
        data.image.length > 0 &&
        data.image[0] instanceof File
      ) {
        formData.append("image", data.image[0]);
       
      } else {
        console.log("No new main image selected");
      }

      if (data.image_gallery && data.image_gallery.length > 0) {
        const validFiles = Array.from(data.image_gallery).filter(
          (file) => file instanceof File
        );

        validFiles.forEach((file) => {
          formData.append("image_gallery[]", file);
        });
      }

      for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(
            `  ${key}: File - ${value.name} (${(value.size / 1024).toFixed(
              2
            )} KB)`
          );
        } else {
          console.log(`  ${key}:`, value);
        }
      }

      // Submit the form
      await mutateAsync(formData, {
        onSuccess: (response) => {
          toast.success("Property updated successfully");
          router.push("/admin/property");
        },
        onError: (err) => {
          const errorMessage =
            err?.response?.data?.message || "Failed to update property";
          toast.error(errorMessage);

          if (err?.response?.data?.errors) {
            Object.entries(err.response.data.errors).forEach(
              ([field, messages]) => {
                console.error(`  ${field}:`, messages);
              }
            );
          }
        },
      });
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading property data...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Property not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Update Property</h1>

      <Form onSubmit={handleSubmit(submitFormData)}>
        {/* Basic Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
            Basic Information
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <TextInput
              label="Property Title"
              {...register("title")}
              error={errors.title?.message}
            />
            <TextInput
              label="Property Price"
              {...register("price")}
              error={errors.price?.message}
            />
            <TextInput
              label="Property Location"
              {...register("location")}
              error={errors.location?.message}
            />
          </div>
        </div>

        {/* Property Details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
            Property Details
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <TextInput
              label="Number of Bedrooms"
              {...register("bed_rooms")}
              error={errors.bed_rooms?.message}
            />
            <TextInput
              label="Number of Bathrooms"
              {...register("bath_rooms")}
              error={errors.bath_rooms?.message}
            />
            <TextInput
              label="Area (sq ft)"
              {...register("sqft")}
              error={errors.sqft?.message}
            />
          </div>
        </div>

        {/* Property Type & Status */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <SelectInput
              label="Property Type"
              options={[
                { value: "apartment", label: "Apartment" },
                { value: "house", label: "House" },
                { value: "condo", label: "Condo" },
                { value: "townhouse", label: "Townhouse" },
                { value: "villa", label: "Villa" },
                { value: "studio", label: "Studio" },
                { value: "duplex", label: "Duplex" },
                { value: "penthouse", label: "Penthouse" },
                { value: "cottage", label: "Cottage" },
                { value: "farmhouse", label: "Farmhouse" },
              ]}
              {...register("property_type")}
              error={errors.property_type?.message}
            />
            <SelectInput
              label="Property Status"
              options={[
                { value: "for_sale", label: "For Sale" },
                { value: "for_rent", label: "For Rent" },
              ]}
              {...register("property_status")}
              error={errors.property_status?.message}
            />
          </div>
        </div>

        {/* Descriptions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
            Descriptions
          </h2>
          <TextArea
            label="Short Description"
            {...register("short_description")}
            error={errors.short_description?.message}
          />
          <TextArea
            label="Full Description"
            {...register("full_description")}
            error={errors.full_description?.message}
          />
        </div>

        {/* Images */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
            Property Images
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <FileInput
              label="Main Image"
              image_url={mainPreview}
              onChange={(files) => {
                console.log("Main image selected:", files);
                setValue("image", files, { shouldValidate: true });
              }}
              error={errors.image?.message}
            />

            <FileInput
              label="Image Gallery"
              multiple
              image_url={galleryPreview}
              onChange={(files) => {
                console.log("Gallery selected:", files);
                setValue("image_gallery", files, { shouldValidate: true });
              }}
              error={errors.image_gallery?.message}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--secondary-color)]">
            Contact Information
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <TextInput
              label="Contact Name"
              {...register("contact_name")}
              error={errors.contact_name?.message}
            />
            <TextInput
              label="Contact Email"
              {...register("contact_email")}
              error={errors.contact_email?.message}
            />
            <TextInput
              label="Contact Phone"
              {...register("contact_phone")}
              error={errors.contact_phone?.message}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <PrimaryButton
            loading={isPending}
            type="submit"
            text={isPending ? "Updating..." : "Update Property"}
          />
          <button
            type="button"
            onClick={() => router.push("/admin/property")}
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
            disabled={isPending}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}
