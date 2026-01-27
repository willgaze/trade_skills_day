import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}
