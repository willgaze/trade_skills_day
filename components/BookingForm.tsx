"use client";

import { useFormState } from "react-dom";
import { submitBooking, type FormState } from "@/lib/actions";
import { courses } from "@/lib/courses";
import { locations } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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

export function BookingForm() {
  const [state, formAction] = useFormState(submitBooking, initialState);

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6">
        <h3 className="font-heading text-lg font-semibold text-green-800">
          Booking Request Received
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
        <Label htmlFor="courseSlug">Course</Label>
        <Select name="courseSlug" required>
          <SelectTrigger>
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.slug} value={course.slug}>
                {course.title} ({course.duration} — &pound;{course.price})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.courseSlug && (
          <p className="text-sm text-red-600">{state.errors.courseSlug[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredLocation">Preferred Location</Label>
        <Select name="preferredLocation" required>
          <SelectTrigger>
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc.slug} value={loc.slug}>
                {loc.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.preferredLocation && (
          <p className="text-sm text-red-600">
            {state.errors.preferredLocation[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message (optional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Any questions or special requirements?"
          rows={4}
        />
      </div>

      <div className="space-y-4 rounded-lg border bg-slate-50 p-4">
        <div className="flex items-start gap-3">
          <Checkbox id="ageConfirmed" name="ageConfirmed" required />
          <Label htmlFor="ageConfirmed" className="text-sm leading-relaxed">
            I confirm I am aged 18 or over
          </Label>
        </div>
        {state.errors?.ageConfirmed && (
          <p className="text-sm text-red-600">
            {state.errors.ageConfirmed[0]}
          </p>
        )}

        <div className="flex items-start gap-3">
          <Checkbox id="termsAccepted" name="termsAccepted" required />
          <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
            I accept the terms and conditions and understand this is a taster
            workshop, not an accredited qualification
          </Label>
        </div>
        {state.errors?.termsAccepted && (
          <p className="text-sm text-red-600">
            {state.errors.termsAccepted[0]}
          </p>
        )}
      </div>

      <SubmitButton>Submit Booking Request</SubmitButton>
    </form>
  );
}
