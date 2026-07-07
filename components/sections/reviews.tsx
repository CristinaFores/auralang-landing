"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { STORE_URL } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";

export function Reviews() {
  const { t } = useLocale();

  return (
    <div className="bg-ink px-5 py-20 text-background sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-[56px] font-extrabold leading-none tracking-[-2px] sm:text-[76px]">
          {t.reviewsScore}
        </div>
        <div className="my-3.5 text-2xl tracking-[3px] text-accent">★★★★★</div>
        <p className="mb-7.5 text-base opacity-75">{t.reviewsSubtitle}</p>
        <Button href={STORE_URL} variant="inverse" className="px-6 py-3.5 text-[15px]">
          {t.reviewsCta}
        </Button>
      </div>
    </div>
  );
}
