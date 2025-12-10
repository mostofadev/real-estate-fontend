import { z } from "zod";

export const PropertySchema = z.object({
  title: z.string().min(1, "Property title is required"),
  price: z.string().min(1, "Price is required"),
  location: z.string().min(1, "Location is required"),

  bed_rooms: z
    .string()
    .min(1, "Number of bedrooms is required")
    .refine((val) => !isNaN(val), "Must be a number"),

  bath_rooms: z
    .string()
    .min(1, "Number of bathrooms is required")
    .refine((val) => !isNaN(val), "Must be a number"),

  sqft: z
    .string()
    .min(1, "Area in sqft is required")
    .refine((val) => !isNaN(val), "Must be a number"),

  property_type: z.string().min(1, "Property type is required"),
  property_status: z.string().min(1, "Property status is required"),

  short_description: z.string().min(1, "Short description is required"),
  full_description: z.string().min(1, "Full description is required"),

  image: z
    .any()
    .refine((file) => file !== undefined && file !== null, "Main image is required"),

  image_gallery: z
    .array(z.any())
    .min(1, "At least 1 gallery image is required"),

  contact_name: z.string().min(1, "Contact name is required"),
  contact_email: z
    .string()
    .email("Invalid email address")
    .min(1, "Contact email is required"),
  contact_phone: z.string().min(1, "Contact phone is required"),
});
