"use client";

import PrimaryButton from "@/components/ui/button/PrimaryButton";
import FileInput from "@/components/ui/formAction/FileInput";
import Form from "@/components/ui/formAction/Form";
import SelectInput from "@/components/ui/formAction/SeleteInput";
import TextArea from "@/components/ui/formAction/TextAreaInput";
import TextInput from "@/components/ui/formAction/TextInput";
import { useAdminPropertyPost } from "@/hooks/useAdminProperty";
import { PropertySchema } from "@/schemas/propertySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function PostProperty() {
  const router = useRouter();
  const { mutateAsync, isPending, isError, isSuccess, error } =
    useAdminPropertyPost();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PropertySchema),
  });

  const submitFormData = async (data) => {
    console.log("Form submitted", data);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("location", data.location);
    formData.append("bed_room", data.bed_rooms);
    formData.append("bath_room", data.bath_rooms);
    formData.append("sqft", data.sqft);
    formData.append("property_type", data.property_type);
    formData.append("property_status", data.property_status);
    formData.append("short_description", data.short_description);
    formData.append("full_description", data.full_description);

    formData.append("admin_name", data.contact_name);
    formData.append("admin_email", data.contact_email);
    formData.append("admin_number", data.contact_phone);

    if (data.image) {
      formData.append("image", data.image);
    }

    if (data.image_gallery && data.image_gallery.length > 0) {
      Array.from(data.image_gallery).forEach((file) => {
        formData.append("image_gallery[]", file);
      });
    }

    mutateAsync(formData, {
      onSuccess: () => {
        console.log("Property posted successfully");
        toast.success("Property posted successfully");
        router.push("/admin/property");
      },
      onError: (error) => {
        console.error("Error posting property:", error);
      },
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(submitFormData)}>
        <div className="flex flex-col lg:flex-row gap-4">
          <TextInput
            label="Property Title"
            placeholder="Enter property title"
            {...register("title")}
            error={errors.title?.message}
          />
          <TextInput
            label="Property Price"
            placeholder="Enter property price"
            {...register("price")}
            error={errors.price?.message}
          />
          <TextInput
            label="Property Location"
            placeholder="Enter property location"
            {...register("location")}
            error={errors.location?.message}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <TextInput
            label="Number of Bedrooms"
            placeholder="Enter number of bedrooms"
            {...register("bed_rooms")}
            error={errors.bed_rooms?.message}
          />
          <TextInput
            label="Number of Bathrooms"
            placeholder="Enter number of bathrooms"
            {...register("bath_rooms")}
            error={errors.bath_rooms?.message}
          />
          <TextInput
            label="Area (sq ft)"
            placeholder="Enter area in square feet"
            {...register("sqft")}
            error={errors.sqft?.message}
          />
        </div>
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
            error={errors.listing_type?.message}
          />
        </div>
        <div className="">
          <TextArea
            label="Property Short Description"
            placeholder="Short description"
            {...register("short_description")}
            error={errors.short_description?.message}
          />
        </div>
        <div className="">
          <TextArea
            label="Property Full Description"
            placeholder="Full description"
            {...register("full_description")}
            error={errors.full_description?.message}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <FileInput
            label="Main Image"
            onChange={(files) => {
              setValue("image", files);
            }}
            error={
              errors.image?.message ||
              (Array.isArray(errors.image) ? errors.image[0] : "")
            }
          />

          <FileInput
            label="Image Gallery"
            multiple
            onChange={(files) => {
              setValue("image_gallery", files, { shouldValidate: true });
            }}
            error={errors.image_gallery?.message}
          />
        </div>
        <div className="my-4">
          <h2 className="text-xl text-[var(--secondary-color)]">contact us</h2>
          <div className="flex justify-center flex-col lg:flex-row gap-4">
            <TextInput
              label="Contact Name"
              placeholder="Enter contact name"
              {...register("contact_name")}
              error={errors.contact_name?.message}
            />
            <TextInput
              label="Contact Email"
              placeholder="Enter contact email"
              {...register("contact_email")}
              error={errors.contact_email?.message}
            />
            <TextInput
              label="Contact Phone"
              placeholder="Enter contact phone"
              {...register("contact_phone")}
              error={errors.contact_phone?.message}
            />
          </div>
        </div>
        <div className="">
          <PrimaryButton loading={isPending} type="submit" text="Submit" />
        </div>
      </Form>
    </div>
  );
}

export default PostProperty;
