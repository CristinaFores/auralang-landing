"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { STORE_URL } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  const { t } = useLocale();

  return (
    <div className="bg-accent-soft px-12 py-[100px] text-center">
      <h2 className="mx-auto mb-6 max-w-[700px] text-[42px] font-extrabold leading-tight tracking-[-1px]">
        {t.finalTitle}
      </h2>
      <Button href={STORE_URL} className="px-7.5 py-4 text-[17px]">
        {t.heroCtaPrimary}
      </Button>
    </div>
  );
}
