import { z } from "zod";

export const kycFormSchema = z.object({
  firstname: z.string().trim().min(1, { message: "Required" }),
  lastname: z.string().trim().min(1, { message: "Required" }),
  phone: z.string().trim().min(1, { message: "Required" }),
  address: z.string().trim().min(1, { message: "Required" }),
  city: z.string().trim().min(1, { message: "Required" }),
  pincode: z.string().trim().min(1, { message: "Required" }),
  dob: z.string().trim().min(1, { message: "Required" }),
  country: z.string().trim().min(1, { message: "Required" }),
  gender: z.string().trim().min(1, { message: "Required" }),
  profession: z.string().trim().min(1, { message: "Required" }),
  proofnumber: z.string().trim().min(1, { message: "proofnumber" }),
  front: z.string().trim().min(1, { message: "front" }),
  back: z.string().trim().min(1, { message: "back" }),
  selfie: z.string().trim().min(1, { message: "selfie" }),
});
