import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { FAQAccordion, faqData } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about our trade taster workshops — experience needed, what to wear, pricing, booking, safety and more.",
  openGraph: {
    title: "FAQ | Trade Skills Day",
    description: "Common questions about our trade taster workshops.",
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqData)} />

      <PageHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about our taster workshops."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <Section>
        <div className="max-w-3xl">
          <FAQAccordion />
        </div>
      </Section>
    </>
  );
}
