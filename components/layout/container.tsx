import { cn } from "@/lib/cn";

export default function Container({ children , className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 relative z-10", className)}>{children}</div>;
};
