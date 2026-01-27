import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Workshop",
  description:
    "Request a place on one of our trade taster workshops. Choose your course and preferred location, and we will confirm your booking within 2 working days.",
  openGraph: {
    title: "Book a Workshop | Trade Skills Day",
    description:
      "Request a place on one of our trade taster workshops.",
  },
};

export default function BookPage() {
  return (
    <>
      <PageHeader
        title="Book a Workshop"
        description="Request a place on one of our taster workshops. We will confirm your booking within 2 working days."
        breadcrumbs={[{ label: "Book" }]}
      />

      <Section>
        <div className="max-w-2xl">
          <div className="mb-8 rounded-lg border bg-slate-50 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Please note:</strong> Our workshops are taster experience
              days — not accredited qualifications. All participants must be
              aged 18 or over. Places are limited to 8 per session.
            </p>
          </div>
          <BookingForm />
        </div>
      </Section>
    </>
  );
}
