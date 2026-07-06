"use client";

import Image from "next/image";
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

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-[300px]">
          <div className="absolute -inset-6 -rotate-2 rounded-[36px] bg-accent-soft" />
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/screenshots/panel-dark-listening.png"
              alt={t.mockupTabTitle}
              width={256}
              height={650}
              priority
              className="w-full rounded-2xl border border-hairline shadow-[0_40px_80px_-30px_rgba(11,16,32,0.5)]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
