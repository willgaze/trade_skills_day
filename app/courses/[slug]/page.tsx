import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { courseJsonLd } from "@/lib/seo";
import {
  getCourseBySlug,
  getAllSlugs,
  tradeLabels,
} from "@/lib/courses";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.summary,
    openGraph: {
      title: `${course.title} | Trade Skills Day`,
      description: course.summary,
    },
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <>
      <JsonLd data={courseJsonLd(course)} />

      <PageHeader
        title={course.title}
        description={course.summary}
        breadcrumbs={[
          { label: "Courses", href: "/courses" },
          { label: course.title },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{tradeLabels[course.trade]}</Badge>
                <Badge variant="outline">{course.duration}</Badge>
                <Badge variant="outline">
                  &pound;{course.price}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                What You Will Learn
              </h2>
              <ul className="space-y-2">
                {course.whatYouLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                What is Included
              </h2>
              <ul className="space-y-2">
                {course.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold mb-4">
                Who is This For?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {course.suitableFor}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-slate-50 p-6 sticky top-24 space-y-4">
              <h3 className="font-heading text-lg font-semibold">
                Quick Summary
              </h3>
              <Separator />
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-medium">Trade</dt>
                  <dd className="text-muted-foreground">
                    {tradeLabels[course.trade]}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Duration</dt>
                  <dd className="text-muted-foreground">{course.duration}</dd>
                </div>
                <div>
                  <dt className="font-medium">Price</dt>
                  <dd className="text-muted-foreground">
                    &pound;{course.price}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Locations</dt>
                  <dd className="text-muted-foreground">
                    {course.locations
                      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
                      .join(", ")}
                  </dd>
                </div>
              </dl>
              <Separator />
              <p className="text-xs text-muted-foreground">
                This is a taster workshop — not an accredited qualification.
                Participants must be aged 18+.
              </p>
              <Button
                asChild
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="/book">Book This Course</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
