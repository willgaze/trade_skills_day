import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getJournalPostsSorted } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Reflections on building Trade Skills Day — the decisions, thinking, and formation behind the project.",
  openGraph: {
    title: "Journal | Trade Skills Day",
    description:
      "Reflections on building Trade Skills Day — the decisions, thinking, and formation behind the project.",
  },
};

export default function JournalPage() {
  const posts = getJournalPostsSorted();

  return (
    <>
      <PageHeader
        title="Journal"
        description="Honest reflections on how Trade Skills Day came together — the thinking, the trade-offs, and the decisions that shaped the project."
        breadcrumbs={[{ label: "Journal" }]}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group"
            >
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <time
                      dateTime={post.date}
                      className="text-xs text-muted-foreground"
                    >
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <CardTitle className="font-heading text-lg group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.summary}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
