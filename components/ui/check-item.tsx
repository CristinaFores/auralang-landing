export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-hairline py-5">
      <div className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-accent-soft text-[13px] font-bold text-accent-dark">
        ✓
      </div>
      <div className="text-[15.5px] leading-relaxed text-ink">{children}</div>
    </div>
  );
}
