import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-12 sm:py-16">
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
        ) : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </Container>
    </div>
  );
}
