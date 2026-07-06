import { cn } from "@/lib/cn";

export default function Container({ children , className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("mx-auto max-w-[1320px] px-12 py-24 relative z-10", className)}>{children}</div>;
};
