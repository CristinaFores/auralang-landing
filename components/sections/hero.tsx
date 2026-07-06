"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";
import { STORE_URL } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";
import { StatItem } from "@/components/ui/stat-item";

export function Hero() {
  const { t } = useLocale();

  return (
    <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-12 py-24 md:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div className="mb-6.5 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-semibold text-accent-dark">
          <span>{t.heroKicker}</span>
        </div>
        <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-[-1.5px] md:text-[58px]">
          {t.heroTitle}
        </h1>
        <p className="mb-9 max-w-[520px] text-lg leading-relaxed text-ink-soft">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-wrap items-center gap-4.5">
          <Button href={STORE_URL}>{t.heroCtaPrimary}</Button>
          <div className="flex items-center gap-2 text-sm text-ink-soft">
            <span className="text-base tracking-[1px] text-accent-dark">★★★★★</span>
            <span>{t.heroRating}</span>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-7">
          {t.heroStats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-7 -rotate-2 rounded-[32px] bg-accent-soft" />
        <div className="relative overflow-hidden rounded-[22px] border border-hairline bg-white shadow-[0_30px_70px_-25px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2 border-b border-hairline px-4.5 py-3.5">
            <div className="h-[9px] w-[9px] rounded-full bg-hairline" />
            <div className="h-[9px] w-[9px] rounded-full bg-hairline" />
            <div className="h-[9px] w-[9px] rounded-full bg-hairline" />
            <span className="ml-2 text-xs text-ink-soft">{t.mockupTabTitle}</span>
          </div>
          <div className="flex flex-col gap-4 p-5.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative h-3.5 w-3.5">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0.15, 0.55] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-[3px] rounded-full bg-accent" />
                </div>
                <span className="text-sm font-semibold">{t.mockupStatus}</span>
              </div>
              <div className="flex h-5 items-end gap-[3px]">
                {[0, 0.15, 0.3, 0.45].map((delay) => (
                  <motion.div
                    key={delay}
                    className="w-[3px] rounded-sm bg-accent"
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="flex-1 rounded-[10px] bg-panel-soft px-3 py-2.5 text-xs text-ink-soft">
                {t.mockupLangFrom}
              </div>
              <div className="flex-1 rounded-[10px] bg-panel-soft px-3 py-2.5 text-xs text-ink-soft">
                {t.mockupLangTo}
              </div>
            </div>
            <div className="flex flex-col gap-2.5 rounded-xl bg-panel-soft p-4">
              <div>
                <div className="mb-1 text-[11px] uppercase tracking-[0.5px] text-ink-faint">
                  {t.mockupOriginalLabel}
                </div>
                <div className="text-sm text-ink-soft">{t.mockupOriginalLine}</div>
              </div>
              <div className="h-px bg-hairline" />
              <div>
                <div className="mb-1 text-[11px] uppercase tracking-[0.5px] text-accent-dark">
                  {t.mockupTranslatedLabel}
                </div>
                <div className="inline rounded bg-accent-soft px-1 py-0.5 text-[15px] font-semibold [box-decoration-break:clone]">
                  {t.mockupTranslatedLine}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
