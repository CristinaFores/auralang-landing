"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Kicker } from "@/components/ui/kicker";

export function Screenshots() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-12 py-24">
      <div className="mb-12 max-w-[620px]">
        <Kicker>{t.shotsKicker}</Kicker>
        <h2 className="mb-3.5 text-[38px] font-extrabold leading-tight tracking-[-1px]">
          {t.shotsTitle}
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">{t.shotsSubtitle}</p>
      </div>
      <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
        {t.shots.map((shot) => (
          <div
            key={shot.label}
            className="overflow-hidden rounded-2xl border border-hairline"
          >
            <div
              className="flex aspect-4/3 items-center justify-center p-5 text-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, var(--panel-soft), var(--panel-soft) 10px, var(--panel) 10px, var(--panel) 20px)",
              }}
            >
              <span className="font-mono text-xs text-ink-soft">{shot.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
