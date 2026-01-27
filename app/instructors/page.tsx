import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { InstructorForm } from "@/components/InstructorForm";

export const metadata: Metadata = {
  title: "Become an Instructor",
  description:
    "Interested in teaching trade skills? We are looking for experienced tradespeople to lead our taster workshops in Andover and Marlborough.",
  openGraph: {
    title: "Become an Instructor | Trade Skills Day",
    description:
      "We are looking for experienced tradespeople to lead our taster workshops.",
  },
};

export default function InstructorsPage() {
  return (
    <>
      <PageHeader
        title="Become an Instructor"
        description="We are looking for experienced tradespeople to lead our taster workshops."
        breadcrumbs={[{ label: "Instructors" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-semibold mb-3">
                Who We Are Looking For
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We need working tradespeople with genuine on-the-job experience
                in tiling, plastering or plumbing. You do not need formal
                teaching qualifications — we provide training on how to run our
                workshop format.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold mb-3">
                What is Involved
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  Leading 1 or 2 day taster workshops for groups of up to 8
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  Demonstrating techniques and supervising hands-on practice
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  Delivering safety briefings and ensuring PPE compliance
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  Flexible scheduling — work around your existing commitments
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold mb-3">
                Locations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We currently operate in Andover (Hampshire) and Marlborough
                (Wiltshire). You can choose which location works best for you.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold mb-6">
              Register Your Interest
            </h2>
            <InstructorForm />
          </div>
        </div>
      </Section>
    </>
  );
}
