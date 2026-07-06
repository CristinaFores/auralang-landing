"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Kicker } from "@/components/ui/kicker";
import Container from "@/components/layout/container";

export function ModelModes() {
  const { t } = useLocale();

  return (
    <div className="bg-panel">
      <Container>
        <div className="mb-12 max-w-[620px]">
          <Kicker>{t.modesKicker}</Kicker>
          <h2 className="mb-3.5 text-[38px] font-extrabold leading-tight tracking-[-1px]">
            {t.modesTitle}
          </h2>
          <p className="text-base leading-relaxed text-ink-soft">{t.modesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {t.modes.map((mode) => (
            <div
              key={mode.name}
              className="relative rounded-2xl border border-hairline bg-background p-7"
            >
              {mode.recommended && (
                <div className="absolute top-5 right-5 rounded-xl bg-accent-soft px-2.5 py-1 text-[11px] font-bold text-accent-dark">
                  {t.recommendedTag}
                </div>
              )}
              <div className="mb-1.5 text-2xl font-bold">{mode.name}</div>
              <div className="mb-3.5 font-mono text-xs text-ink-faint">{mode.tag}</div>
              <div className="text-[14.5px] leading-relaxed text-ink-soft">
                {mode.desc}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
