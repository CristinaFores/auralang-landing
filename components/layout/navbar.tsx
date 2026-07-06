"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { STORE_URL } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t, toggleLocale } = useLocale();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-hairline bg-background/90 px-12 py-5 backdrop-blur-sm">
      <div className="flex items-center gap-2.5">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent">
          <div className="h-3 w-3 rounded-full border-[2.5px] border-white" />
        </div>
        <span className="text-2xl font-bold tracking-[-0.3px]">AuraLang</span>
      </div>
      <div className="flex items-center gap-4.5">
        <button
          onClick={toggleLocale}
          className="rounded-full border border-hairline bg-transparent px-3.5 py-2 font-sans text-sm font-semibold text-ink"
        >
          {t.langSwitchLabel}
        </button>
        <Button href={STORE_URL} variant="dark" className="px-5 py-2.5 text-sm">
          {t.navCta}
        </Button>
      </div>
    </div>
  );
}
