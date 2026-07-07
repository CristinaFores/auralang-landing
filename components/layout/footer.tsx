"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { CONTACT_EMAIL, REPO_URL, STORE_URL } from "@/lib/i18n/content";
import Container from "@/components/layout/container";

export function Footer() {
  const { t } = useLocale();

  return (
    <Container className="border-t border-hairline py-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-5">
        <div className="flex items-center gap-2.5">
          <Image
            src="/auralang-icon.png"
            alt="AuraLang"
            width={26}
            height={26}
            className="rounded-[7px]"
          />
          <span className="text-[19px] font-bold">AuraLang</span>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
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
        <div className="text-[13px] leading-relaxed text-ink-faint">{t.footerNote}</div>
      </div>
    </Container>
  );
}
