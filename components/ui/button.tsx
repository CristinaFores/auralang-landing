import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark" | "inverse";
  external?: boolean;
  className?: string;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-accent text-white",
  dark: "bg-ink text-background",
  inverse: "bg-background text-ink",
  ghost: "border border-hairline bg-transparent text-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = true,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-[15px] font-bold no-underline",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
