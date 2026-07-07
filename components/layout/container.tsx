import { cn } from "@/lib/cn";

export default function Container({ children , className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 relative z-10", className)}>{children}</div>;
};
