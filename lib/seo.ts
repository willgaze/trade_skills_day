import { siteConfig } from "@/config/site";
import type { Course } from "@/lib/courses";
import type { JournalPost } from "@/lib/journal";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
  };
}

export function localBusinessJsonLd(location: {
  name: string;
  address: string;
  postcode: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} — ${location.name}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: location.address,
      postalCode: location.postcode,
      addressCountry: "GB",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
  };
}

export function courseJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      price: course.price.toString(),
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: course.locations.map((loc) => ({
      "@type": "CourseInstance",
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: loc.charAt(0).toUpperCase() + loc.slice(1),
        address: {
          "@type": "PostalAddress",
          addressLocality: loc.charAt(0).toUpperCase() + loc.slice(1),
          addressCountry: "GB",
        },
      },
    })),
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(post: JournalPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/journal/${post.slug}`,
    },
  };
}
