"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Kicker } from "@/components/ui/kicker";
import { CheckItem } from "@/components/ui/check-item";
import Container from "@/components/layout/container";

export function Privacy() {
  const { t } = useLocale();

  return (
    <Container>
    <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-[0.85fr_1.15fr]">
      <div>
        <Kicker>{t.privacyKicker}</Kicker>
        <h2 className="mb-4.5 text-[38px] font-extrabold leading-[1.18] tracking-[-1px]">
          {t.privacyTitle}
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">{t.privacySubtitle}</p>
      </div>
      <div className="flex flex-col gap-1">
        {t.privacyPoints.map((point) => (
          <CheckItem key={point}>{point}</CheckItem>
        ))}
      </div>
    </div>
    </Container>
  );
}
