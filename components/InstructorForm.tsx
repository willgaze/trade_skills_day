"use client";

import { useFormState } from "react-dom";
import { submitInstructorInterest, type FormState } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitButton } from "@/components/SubmitButton";

const initialState: FormState = {
  success: false,
  message: "",
};

export function InstructorForm() {
  const [state, formAction] = useFormState(submitInstructorInterest, initialState);

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6">
        <h3 className="font-heading text-lg font-semibold text-green-800">
          Interest Registered
        </h3>
        <p className="mt-2 text-green-700">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" required placeholder="Your full name" />
        {state.errors?.name && (
          <p className="text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
        {state.errors?.email && (
          <p className="text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="07700 900000"
        />
        {state.errors?.phone && (
          <p className="text-sm text-red-600">{state.errors.phone[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="trade">Your Trade</Label>
        <Select name="trade" required>
          <SelectTrigger>
            <SelectValue placeholder="Select your trade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tiling">Tiling</SelectItem>
            <SelectItem value="plastering">Plastering</SelectItem>
            <SelectItem value="plumbing">Plumbing</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.trade && (
          <p className="text-sm text-red-600">{state.errors.trade[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Your Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          required
          placeholder="Tell us about your trade experience, qualifications and any teaching experience…"
          rows={5}
        />
        {state.errors?.experience && (
          <p className="text-sm text-red-600">{state.errors.experience[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message (optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Anything else you would like us to know?"
          rows={3}
        />
      </div>

      <SubmitButton>Register Interest</SubmitButton>
    </form>
  );
}
