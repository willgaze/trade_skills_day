"use server";

import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { bookingSchema, instructorSchema } from "@/lib/schemas";

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

const DATA_DIR = join(process.cwd(), "data");

async function ensureDataDir() {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {
    // directory already exists
  }
}

async function appendToJsonFile(filename: string, data: Record<string, unknown>) {
  await ensureDataDir();
  const filePath = join(DATA_DIR, filename);
  let existing: Record<string, unknown>[] = [];

  try {
    const content = await readFile(filePath, "utf-8");
    existing = JSON.parse(content);
  } catch {
    // file doesn't exist yet
  }

  existing.push({ ...data, submittedAt: new Date().toISOString() });
  await writeFile(filePath, JSON.stringify(existing, null, 2));
}

export async function submitBooking(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData.entries());
  const result = bookingSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  try {
    // TODO: Replace with database insert and/or email notification
    await appendToJsonFile("bookings.json", result.data as unknown as Record<string, unknown>);
    return {
      success: true,
      message:
        "Thank you! Your booking request has been received. We will be in touch within 2 working days.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us directly.",
    };
  }
}

export async function submitInstructorInterest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = Object.fromEntries(formData.entries());
  const result = instructorSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  try {
    // TODO: Replace with database insert and/or email notification
    await appendToJsonFile("instructor-interest.json", result.data as unknown as Record<string, unknown>);
    return {
      success: true,
      message:
        "Thank you for your interest! We will review your details and get back to you soon.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us directly.",
    };
  }
}
