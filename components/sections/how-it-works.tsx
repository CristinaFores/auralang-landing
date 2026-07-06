"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Kicker } from "@/components/ui/kicker";

export function HowItWorks() {
  const { t } = useLocale();

  return (
    <div className="bg-panel ">
      <div className="mx-auto max-w-6xl px-12 py-24">
        <div className="mb-14">
          <Kicker>{t.howKicker}</Kicker>
          <h2 className="text-[38px] font-extrabold leading-tight tracking-[-1px] max-w-[620px]">
            {t.howTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step) => (
            <div key={step.n}>
              <div className="mb-3 text-[38px] font-extrabold text-accent-soft-2">
                {step.n}
              </div>
              <div className="mb-2 text-[17px] font-bold">{step.title}</div>
              <div className="text-[14.5px] leading-relaxed text-ink-soft">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
