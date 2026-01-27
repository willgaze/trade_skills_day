import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center">
      <Container>
        <div className="max-w-md">
          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sorry, we could not find the page you are looking for. It may have
            been moved or no longer exists.
          </p>
          <div className="mt-8">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
