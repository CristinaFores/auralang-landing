"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { Kicker } from "@/components/ui/kicker";
import { AccordionItem } from "@/components/ui/accordion-item";
import Container from "@/components/layout/container";

export function Faq() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container>
    <div id="faq">
      <Kicker>{t.faqKicker}</Kicker>
      <h2 className="mb-10 text-[38px] font-extrabold leading-tight tracking-[-1px]">
        {t.faqTitle}
      </h2>
      {t.faq.map((item, i) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
        />
      ))}
    </div>
    </Container>
  );
}
