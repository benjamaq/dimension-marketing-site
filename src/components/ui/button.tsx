import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          variant === "default" && "bg-gray-800 text-white hover:bg-gray-900",
          variant === "outline" && "border border-gray-300 bg-white hover:bg-gray-100 text-gray-900",
          variant === "ghost" && "bg-transparent hover:bg-gray-100 text-gray-900",
          variant === "link" && "bg-transparent underline-offset-4 hover:underline text-gray-900",
          size === "default" && "h-10 py-2 px-4",
          size === "sm" && "h-9 px-3",
          size === "lg" && "h-12 px-8 text-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
