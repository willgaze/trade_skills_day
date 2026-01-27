import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section className="relative bg-slate-800 py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Try a trade.
            <br />
            <span className="text-orange-400">Build your confidence.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Hands-on taster workshops in tiling, plastering and plumbing. No
            experience needed — just turn up, learn from working tradespeople,
            and discover whether a career in the trades is right for you.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              <Link href="/courses">View Courses</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:gap-6">
            <li className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
              Small groups (max 8)
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
              Real trade skills
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
              CV-friendly experience
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
