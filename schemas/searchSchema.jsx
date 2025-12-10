import { z } from "zod";

export const SearchSchema = z.object({
  location: z.string().optional(),
  property_type: z.string().optional(),
  bed_room: z.string().optional(),
  bath_room: z.string().optional(),
});