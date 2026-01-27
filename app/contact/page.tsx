import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig, locations } from "@/config/site";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Trade Skills Day. Contact details, workshop locations and directions for Andover and Marlborough.",
  openGraph: {
    title: "Contact Us | Trade Skills Day",
    description: "Get in touch with Trade Skills Day.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch — we would love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Get in Touch
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-orange-500 shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-muted-foreground hover:text-orange-600 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-orange-500 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-orange-600 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We aim to respond to all enquiries within 2 working days. For
                booking requests, please use our{" "}
                <a
                  href="/book"
                  className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
                >
                  booking form
                </a>
                .
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-heading text-xl font-semibold mb-4">
              Our Locations
            </h2>
            {locations.map((loc) => (
              <Card key={loc.slug}>
                <CardHeader>
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <MapPin className="mt-0.5 h-5 w-5 text-orange-500 shrink-0" />
                    {loc.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {loc.address}, {loc.postcode}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {loc.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
