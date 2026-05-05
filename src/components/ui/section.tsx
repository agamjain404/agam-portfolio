import { FadeIn } from "@/components/ui/fade-in";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <FadeIn>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">{title}</p>
        {description ? (
          <p className="mb-8 max-w-2xl text-zinc-300 sm:text-lg">{description}</p>
        ) : null}
      </FadeIn>
      {children}
    </section>
  );
}

