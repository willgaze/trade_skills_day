import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Terms and conditions, privacy policy, and safeguarding policy for Trade Skills Day workshops.",
  openGraph: {
    title: "Legal | Trade Skills Day",
    description: "Terms, privacy and safeguarding policies.",
  },
};

export default function LegalPage() {
  return (
    <>
      <PageHeader
        title="Legal"
        description="Our terms, privacy policy and safeguarding commitments."
        breadcrumbs={[{ label: "Legal" }]}
      />

      <Section>
        <div className="max-w-3xl space-y-12">
          {/* Terms */}
          <div id="terms">
            <h2 className="font-heading text-2xl font-semibold mb-4">
              Terms &amp; Conditions
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                By booking a workshop with {siteConfig.name}, you agree to the
                following terms.
              </p>
              <h3 className="font-medium text-foreground">Bookings</h3>
              <p>
                All bookings are subject to availability. We will confirm your
                place and provide payment details within 2 working days of
                receiving your request. Your place is not guaranteed until
                payment is received.
              </p>
              <h3 className="font-medium text-foreground">Cancellations</h3>
              <p>
                Full refunds are available for cancellations made at least 7
                days before the workshop date. Cancellations within 7 days may
                be offered a transfer to another date at our discretion. No-shows
                are not eligible for a refund.
              </p>
              <h3 className="font-medium text-foreground">Age Requirement</h3>
              <p>
                All participants must be aged 18 or over. Proof of age may be
                requested on the day.
              </p>
              <h3 className="font-medium text-foreground">Health &amp; Safety</h3>
              <p>
                Participants must follow all safety instructions and wear
                provided PPE. We reserve the right to exclude any participant
                who does not follow safety procedures. Participants must declare
                any relevant medical conditions or disabilities before the
                workshop.
              </p>
              <h3 className="font-medium text-foreground">Taster Workshops</h3>
              <p>
                Our workshops are taster experience days. They are not accredited
                qualifications and do not lead to any formal certification (NVQ,
                City &amp; Guilds or otherwise).
              </p>
            </div>
          </div>

          <Separator />

          {/* Privacy */}
          <div id="privacy">
            <h2 className="font-heading text-2xl font-semibold mb-4">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                {siteConfig.name} is committed to protecting your personal
                information.
              </p>
              <h3 className="font-medium text-foreground">
                Information We Collect
              </h3>
              <p>
                We collect your name, email address, phone number and any
                additional information you provide when submitting a booking
                request or instructor interest form.
              </p>
              <h3 className="font-medium text-foreground">
                How We Use Your Information
              </h3>
              <p>
                We use your information solely to process your booking or
                enquiry, communicate with you about your workshop, and improve
                our services. We do not sell or share your personal information
                with third parties for marketing purposes.
              </p>
              <h3 className="font-medium text-foreground">Data Storage</h3>
              <p>
                Your information is stored securely and retained only as long as
                necessary to provide our services. You may request deletion of
                your data at any time by contacting us at {siteConfig.email}.
              </p>
              <h3 className="font-medium text-foreground">Cookies</h3>
              <p>
                This website uses only essential cookies required for the site
                to function. We do not use tracking or advertising cookies.
              </p>
            </div>
          </div>

          <Separator />

          {/* Safeguarding */}
          <div id="safeguarding">
            <h2 className="font-heading text-2xl font-semibold mb-4">
              Safeguarding Policy
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                {siteConfig.name} is committed to providing a safe environment
                for all workshop participants.
              </p>
              <h3 className="font-medium text-foreground">Our Commitment</h3>
              <p>
                All instructors are vetted and DBS-checked. We maintain a zero
                tolerance approach to any form of harassment, discrimination or
                bullying.
              </p>
              <h3 className="font-medium text-foreground">Safety Measures</h3>
              <p>
                All workshops include a comprehensive safety briefing. PPE is
                provided and mandatory. All tool use is supervised by qualified
                instructors. Maximum group sizes are enforced to ensure adequate
                supervision. First aid equipment is available at all venues.
              </p>
              <h3 className="font-medium text-foreground">Reporting Concerns</h3>
              <p>
                If you have any safeguarding concerns, please contact us
                immediately at {siteConfig.email} or call {siteConfig.phone}.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
