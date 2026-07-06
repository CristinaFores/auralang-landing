"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { CONTACT_EMAIL, REPO_URL, STORE_URL } from "@/lib/i18n/content";

export function Footer() {
  const { t } = useLocale();

  return (
    <div className="border-t border-hairline p-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-accent">
            <div className="h-2.5 w-2.5 rounded-full border-2 border-white" />
          </div>
          <span className="text-[19px] font-bold">AuraLang</span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft no-underline"
          >
            GitHub
          </Link>
          <Link href="/privacy" className="text-ink-soft no-underline">
            {t.footerPrivacy}
          </Link>
          <Link href={`mailto:${CONTACT_EMAIL}`} className="text-ink-soft no-underline">
            {t.footerContact}
          </Link>
          <Link
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft no-underline"
          >
            Chrome Web Store
          </Link>
        </div>
        <div className="text-[13px] text-ink-faint">{t.footerNote}</div>
      </div>
    </div>
  );
}
