"use client";

import { cn } from "@/lib/cn";

type AccordionItemProps = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-hairline">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 py-5.5 text-left font-sans text-ink"
      >
        <span className="text-[16.5px] font-semibold">{question}</span>
        <span
          aria-hidden
          className={cn(
            "flex-none text-xl leading-none text-accent-dark transition-transform duration-300 ease-in-out",
            open && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="max-w-[640px] pb-6 text-[15px] leading-relaxed text-ink-soft">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
