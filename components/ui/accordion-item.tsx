"use client";

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
        className="flex w-full items-center justify-between gap-5 py-5.5 text-left font-sans text-ink"
      >
        <span className="text-[16.5px] font-semibold">{question}</span>
        <span className="flex-none text-xl text-accent-dark">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="max-w-[640px] pb-6 text-[15px] leading-relaxed text-ink-soft">
          {answer}
        </div>
      )}
    </div>
  );
}
