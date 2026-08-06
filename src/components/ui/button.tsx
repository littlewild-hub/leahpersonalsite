import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* shadcn/ui-compatible Button, restyled for the codex.
   21st.dev components drop in alongside this without conflict. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-note text-[0.72rem] uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-45 [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        ink: "bg-ink text-paper border border-ink hover:bg-transparent hover:text-ink",
        chalk:
          "bg-sanguine text-ink border border-sanguine hover:bg-transparent hover:text-sanguine-ink hover:border-sanguine-ink",
        plate:
          "bg-transparent text-verdigris-ink border border-verdigris-ink/45 hover:border-verdigris-ink hover:bg-verdigris-wash",
        quiet:
          "bg-transparent text-ink-soft border border-transparent hover:text-ink hover:border-ink-ghost",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-5",
        lg: "h-12 px-7 text-[0.78rem]",
      },
    },
    defaultVariants: { variant: "ink", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
);
Button.displayName = "Button";

export { buttonVariants };
