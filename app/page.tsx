import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CourseGrid } from "@/components/CourseGrid";
import { LocationCard } from "@/components/LocationCard";
import { FAQAccordion, faqData } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo";
import { courses } from "@/lib/courses";
import { locations } from "@/config/site";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);
  const topFaqs = faqData.slice(0, 4);

  return (
    <>
      {locations.map((loc) => (
        <JsonLd key={loc.slug} data={localBusinessJsonLd(loc)} />
      ))}

      <Hero />

      <Section>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Featured Courses
        </h2>
        <p className="mt-2 mb-8 text-muted-foreground">
          Hands-on taster workshops — no experience needed.
        </p>
        <CourseGrid courses={featuredCourses} />
      </Section>

      <Section className="bg-slate-50">
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Our Locations
        </h2>
        <p className="mt-2 mb-8 text-muted-foreground">
          Purpose-built workshop spaces in Hampshire and Wiltshire.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {locations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          Common Questions
        </h2>
        <p className="mt-2 mb-8 text-muted-foreground">
          Everything you need to know before booking.
        </p>
        <div className="max-w-3xl">
          <FAQAccordion items={topFaqs} />
        </div>
      </Section>
    </>
  );
}
