import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trade Skills Day offers hands-on taster workshops in tiling, plastering and plumbing. Learn about our mission to make the trades accessible to everyone.",
  openGraph: {
    title: "About Us | Trade Skills Day",
    description:
      "Learn about our mission to make the trades accessible to everyone.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Trade Skills Day"
        description="Making the trades accessible, one taster workshop at a time."
        breadcrumbs={[{ label: "About" }]}
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Trade Skills Day was founded with a simple idea: give people a
              genuine taste of what it is like to work in the trades. Too many
              people are curious about careers in tiling, plastering or plumbing
              but never get the chance to try before committing to lengthy
              training. Our taster workshops bridge that gap.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Based in Andover and Marlborough, we run 1 and 2 day hands-on
              experience days led by working tradespeople. No textbooks, no
              lectures — just real tools, real materials and real skills.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To remove barriers to trying the trades. Whether you are
              considering a career change, want to upskill for home improvement,
              or simply curious about what tradespeople do, our workshops give
              you the confidence to take the next step.
            </p>
          </div>

          <Separator />

          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              Our Values
            </h2>
            <ul className="space-y-4">
              <li>
                <h3 className="font-medium">Hands-On First</h3>
                <p className="text-sm text-muted-foreground">
                  You learn by doing. Every minute of our workshops is spent
                  with tools in hand, not sitting in a classroom.
                </p>
              </li>
              <li>
                <h3 className="font-medium">Small Groups</h3>
                <p className="text-sm text-muted-foreground">
                  Maximum 8 per session. Everyone gets individual attention and
                  time with the instructor.
                </p>
              </li>
              <li>
                <h3 className="font-medium">Safety Always</h3>
                <p className="text-sm text-muted-foreground">
                  All PPE provided. Full safety briefing before any tools are
                  used. Supervised at every stage.
                </p>
              </li>
              <li>
                <h3 className="font-medium">No Pressure</h3>
                <p className="text-sm text-muted-foreground">
                  These are taster days, not a sales pitch. Try a trade, enjoy
                  the experience, and decide your next steps in your own time.
                </p>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h2 className="font-heading text-xl font-semibold mb-3">
              Our Team
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our instructors are working tradespeople with years of on-the-job
              experience. They know what it takes to succeed in the industry and
              are passionate about sharing their skills. We are currently
              expanding our team —{" "}
              <Link
                href="/instructors"
                className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
              >
                get in touch
              </Link>{" "}
              if you are a qualified tradesperson interested in teaching.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
