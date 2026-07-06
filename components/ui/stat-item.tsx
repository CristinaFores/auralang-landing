export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-ink">{value}</div>
      <div className="mt-0.5 text-[13px] text-ink-soft">{label}</div>
    </div>
  );
}
