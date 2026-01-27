import type { Course } from "@/lib/courses";
import { CourseCard } from "@/components/CourseCard";

export function CourseGrid({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No courses match your filters. Try adjusting your selection.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}
