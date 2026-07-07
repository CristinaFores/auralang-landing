"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { STORE_URL } from "@/lib/i18n/content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t, toggleLocale } = useLocale();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-hairline bg-background/90 px-5 py-4.5 backdrop-blur-sm sm:px-8 sm:py-5 lg:px-12">
      <div className="flex min-w-0 items-center gap-2.5">
        <Image
          src="/auralang-icon.png"
          alt="AuraLang"
          width={34}
          height={34}
          className="rounded-[9px]"
          priority
        />
        <span className="text-xl font-bold tracking-[-0.3px] sm:text-2xl">AuraLang</span>
      </div>
      <div className="flex shrink-0 items-center gap-2.5 sm:gap-4.5">
        <button
          onClick={toggleLocale}
          className="rounded-full border border-hairline bg-transparent px-3 py-2 font-sans text-sm font-semibold text-ink sm:px-3.5"
        >
          {t.langSwitchLabel}
        </button>
        <Button
          href={STORE_URL}
          variant="dark"
          className="hidden whitespace-nowrap px-3.5 py-2.5 text-sm sm:inline-flex sm:px-5"
        >
          {t.navCta}
        </Button>
      </div>
    </div>
  );
}
