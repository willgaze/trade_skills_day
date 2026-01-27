import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import { tradeLabels } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge variant="secondary">{tradeLabels[course.trade]}</Badge>
          <Badge variant="outline">{course.duration}</Badge>
        </div>
        <CardTitle className="font-heading text-xl">{course.title}</CardTitle>
        <CardDescription>{course.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Locations:</span>{" "}
            {course.locations
              .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
              .join(", ")}
          </p>
          <p className="mt-1">
            <span className="font-medium text-foreground">Price:</span> &pound;
            {course.price}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          <Link href={`/courses/${course.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
