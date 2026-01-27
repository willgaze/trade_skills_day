import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  courseSlug: z.string().min(1, "Please select a course"),
  preferredLocation: z.string().min(1, "Please select a location"),
  message: z.string().optional(),
  ageConfirmed: z
    .string()
    .refine((val) => val === "on", {
      message: "You must confirm you are aged 18 or over",
    }),
  termsAccepted: z
    .string()
    .refine((val) => val === "on", {
      message: "You must accept the terms and conditions",
    }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const instructorSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  trade: z.string().min(1, "Please select your trade"),
  experience: z.string().min(10, "Please describe your experience (at least 10 characters)"),
  message: z.string().optional(),
});

export type InstructorFormData = z.infer<typeof instructorSchema>;
