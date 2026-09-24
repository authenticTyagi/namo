"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades + slides a section in once it enters the viewport. Purely
 * decorative motion — content is already in the DOM and readable without
 * JS/animation (no reliance on this for accessibility), it just makes a
 * long page of stat cards feel like a reveal instead of a wall of text.
 */
export function ScrollReveal({
  children,
  delayMs = 0,
  className,
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // threshold is a ratio of the TARGET's own box, not the viewport — a
      // section taller than ~10x the viewport (e.g. a big overview category)
      // would never reach 0.1 and stay invisible forever. 0 fires as soon as
      // any part is visible, so it works regardless of section height.
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "transition-all duration-500 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
