import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  accent:
    "bg-accent text-white hover:bg-accent-hover",
  primary:
    "bg-primary text-white hover:bg-slate-800",
  ghost:
    "bg-transparent text-foreground hover:bg-slate-100",
  outline:
    "border border-border bg-surface text-foreground hover:bg-slate-50",
} as const;

type Variant = keyof typeof variants;

const baseClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-60";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

export function Button({
  children,
  className,
  variant = "accent",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(baseClass, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
