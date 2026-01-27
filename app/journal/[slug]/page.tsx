import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/seo";
import {
  getJournalPostBySlug,
  getAllJournalSlugs,
} from "@/lib/journal";

export function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getJournalPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Trade Skills Day`,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: `${post.title} | Trade Skills Day`,
      description: post.summary,
    },
  };
}

export default function JournalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getJournalPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />

      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Journal", href: "/journal" },
          { label: post.title },
        ]}
      />

      <Section>
        <article className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Badge variant="secondary">{post.category}</Badge>
            <time
              dateTime={post.date}
              className="text-sm text-muted-foreground"
            >
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <div className="space-y-6">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Section>
    </>
  );
}
