"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Pin, Settings, Volume2, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { STORE_URL } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";
import { StatItem } from "@/components/ui/stat-item";

const DEMO_ORIGINAL =
  "is not really useful, so let's send it a real document and get structured insight.";
const DEMO_TRANSLATED =
  "no es realmente útil. Así que enviémosle un documento real y obtengamos información estructurada.";

const BAR_DELAYS = [0, 0.12, 0.24, 0.36, 0.48, 0.6];

export function Hero() {
  const { t } = useLocale();

  return (
    <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-12 py-20 md:grid-cols-[1.05fr_0.95fr]">
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

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-[320px]">
          <div className="absolute -inset-6 -rotate-2 rounded-[36px] bg-accent-soft" />
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-hairline shadow-[0_40px_80px_-30px_rgba(11,16,32,0.55)]"
            role="img"
            aria-label={t.mockupTabTitle}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Browser side-panel title bar */}
            <div className="flex items-center justify-between bg-[#faf3ef] px-3 py-2">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/auralang-icon.png"
                  alt=""
                  width={15}
                  height={15}
                  className="rounded-[4px]"
                />
                <span className="text-[11px] font-medium text-ink">AuraLang</span>
              </div>
              <div className="flex items-center gap-2 text-ink-faint">
                <Pin className="h-3 w-3" />
                <X className="h-3 w-3" />
              </div>
            </div>

            {/* Extension panel (dark) */}
            <div className="flex flex-col gap-4 bg-[#0b1020] p-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/auralang-icon.png"
                    alt=""
                    width={30}
                    height={30}
                    className="rounded-lg"
                  />
                  <div className="leading-tight">
                    <div className="text-sm font-bold text-white">AuraLang</div>
                    <div className="text-[11px] text-white/50">{t.panelSubtitle}</div>
                  </div>
                </div>
                <Settings className="h-4.5 w-4.5 text-white/40" />
              </div>

              {/* Glowing waveform */}
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                <motion.div
                  className="absolute h-20 w-20 rounded-full bg-accent blur-2xl"
                  animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.85, 1.05, 0.85] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border-2 border-accent/60 bg-[#0d1526]">
                  <div className="flex h-7 items-center gap-[3px]">
                    {BAR_DELAYS.map((delay) => (
                      <motion.span
                        key={delay}
                        className="w-[3px] rounded-full bg-accent"
                        animate={{ height: ["30%", "100%", "30%"] }}
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
              </div>

              {/* Status */}
              <div className="text-center">
                <div className="text-[17px] font-bold text-white">{t.panelStatus}</div>
                <div className="mt-1 text-[11px] leading-snug text-white/45">
                  {t.panelStatusSub}
                </div>
              </div>

              {/* Transcript */}
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[12px] leading-relaxed text-white/45">
                  {DEMO_ORIGINAL}
                </p>
                <p className="mt-2 text-[13px] font-semibold leading-relaxed text-[#b7a6ff]">
                  {DEMO_TRANSLATED}
                </p>
              </div>

              {/* Language selectors */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] text-white/45">
                  {t.panelLangOriginalLabel}
                </span>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[13px] text-white/85">
                  <span>{t.panelLangOriginal}</span>
                  <ChevronDown className="h-4 w-4 text-white/40" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] text-white/45">
                  {t.panelLangTargetLabel}
                </span>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[13px] text-white/85">
                  <span>{t.panelLangTarget}</span>
                  <ChevronDown className="h-4 w-4 text-white/40" />
                </div>
              </div>

              {/* Stop button */}
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3 text-[13px] font-semibold text-white">
                <span className="h-2.5 w-2.5 rounded-[2px] bg-white" />
                {t.panelStop}
              </div>

              {/* Footer note */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-white/35">
                <Volume2 className="h-3.5 w-3.5" />
                {t.panelFooter}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
