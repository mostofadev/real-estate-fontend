import z from "zod";

export const PropertyUpdateSchema  = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.string().min(1, "Price is required"),
  location: z.string().min(1, "Location is required"),
  bed_rooms: z.string().min(1, "Bed rooms required"),
  bath_rooms: z.string().min(1, "Bath rooms required"),
  short_description: z.string().min(1, "Short description required"),
  full_description: z.string().min(1, "Full description required"),
  sqft: z.string().min(1, "SQFT required"),
  property_status: z.string().min(1),
  property_type: z.string().min(1),
  contact_name: z.string().min(1),
  contact_email: z.string().email("Invalid email"),
  contact_phone: z.string().optional(),


  image: z
    .any()
    .optional()
    .refine(
      (file) =>
        file === undefined ||
        file === null ||
        file instanceof File,
      "Invalid image file"
    ),

  
  image_gallery: z
    .any()
    .optional()
    .refine(
      (files) =>
        files === undefined ||
        files === null ||
        files instanceof FileList ||
        Array.isArray(files),
      "Invalid gallery files"
    ),
});
