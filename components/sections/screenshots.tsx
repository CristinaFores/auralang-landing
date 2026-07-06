"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/locale-context";
import { Kicker } from "@/components/ui/kicker";
import Container from "../layout/container";

export function Screenshots() {
  const { t } = useLocale();

  return (
    <Container>
      <div className="mb-12 max-w-[620px]">
        <Kicker>{t.shotsKicker}</Kicker>
        <h2 className="mb-3.5 text-[38px] font-extrabold leading-tight tracking-[-1px]">
          {t.shotsTitle}
        </h2>
        <p className="text-base leading-relaxed text-ink-soft">{t.shotsSubtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-5.5 lg:grid-cols-4">
        {t.shots.map((shot) => (
          <figure
            key={shot.src}
            className="overflow-hidden rounded-2xl border border-hairline bg-panel"
          >
            <div className="flex justify-center px-4 pt-4">
              <Image
                src={shot.src}
                alt={shot.label}
                width={256}
                height={650}
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="w-full rounded-t-xl shadow-[0_18px_40px_-20px_rgba(11,16,32,0.45)]"
              />
            </div>
            <figcaption className="px-4 py-4 text-center text-[13px] font-medium text-ink-soft">
              {shot.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
