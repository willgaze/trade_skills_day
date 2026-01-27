import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { LocationCard } from "@/components/LocationCard";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo";
import { locations } from "@/config/site";
import { getCoursesByLocation } from "@/lib/courses";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find our trade taster workshops in Andover, Hampshire and Marlborough, Wiltshire. Purpose-built workshop spaces with free parking.",
  openGraph: {
    title: "Locations | Trade Skills Day",
    description:
      "Workshop locations in Andover and Marlborough with free parking and professional facilities.",
  },
};

export default function LocationsPage() {
  return (
    <>
      {locations.map((loc) => (
        <JsonLd key={loc.slug} data={localBusinessJsonLd(loc)} />
      ))}

      <PageHeader
        title="Our Locations"
        description="Purpose-built workshop spaces in Andover and Marlborough."
        breadcrumbs={[{ label: "Locations" }]}
      />

      <Section>
        <div className="space-y-12">
          {locations.map((loc) => {
            const locCourses = getCoursesByLocation(loc.slug as "andover" | "marlborough");
            return (
              <div key={loc.slug} className="space-y-6">
                <LocationCard location={loc} />
                <div className="pl-2">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Courses available in {loc.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {locCourses.map((course) => (
                      <Badge key={course.slug} variant="secondary">
                        {course.title}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
