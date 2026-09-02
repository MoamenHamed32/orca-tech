"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { stats } from "@/lib/content/team";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-heading sm:text-5xl">
      {count}+
    </span>
  );
}

export function StatsRow() {
  const t = useTranslations("about");

  return (
    <Section>
      <SectionHeading title={t("statsTitle")} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="glass rounded-2xl p-6 text-center">
            <Counter value={stat.value} />
            <p className="mt-2 text-sm text-muted">{t(`stats.${stat.id}`)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
