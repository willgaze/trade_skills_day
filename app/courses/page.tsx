import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { CourseFilters } from "@/components/CourseFilters";
import { CourseGrid } from "@/components/CourseGrid";
import { filterCourses, type Trade, type Duration, type LocationSlug } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse our hands-on taster workshops in tiling, plastering and plumbing. 1 and 2 day courses in Andover and Marlborough.",
  openGraph: {
    title: "Courses | Trade Skills Day",
    description:
      "Browse our hands-on taster workshops in tiling, plastering and plumbing.",
  },
};

export default function CoursesPage({
  searchParams,
}: {
  searchParams: { trade?: string; duration?: string; location?: string };
}) {
  const filtered = filterCourses({
    trade: searchParams.trade as Trade | undefined,
    duration: searchParams.duration as Duration | undefined,
    location: searchParams.location as LocationSlug | undefined,
  });

  return (
    <>
      <PageHeader
        title="Courses"
        description="Browse our full range of trade taster workshops. Filter by trade, duration or location."
        breadcrumbs={[{ label: "Courses" }]}
      />
      <Section>
        <Suspense fallback={null}>
          <CourseFilters />
        </Suspense>
        <div className="mt-8">
          <CourseGrid courses={filtered} />
        </div>
      </Section>
    </>
  );
}
