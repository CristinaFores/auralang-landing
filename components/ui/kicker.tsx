export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-accent-dark">
      {children}
    </div>
  );
}
