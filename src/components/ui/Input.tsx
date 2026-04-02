"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm text-apple-gray-500 mb-1.5 block"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "bg-apple-gray-100 rounded-lg px-4 py-3 border-none w-full text-apple-black placeholder:text-apple-gray-500 focus:ring-2 focus:ring-apple-accent focus:ring-offset-2 transition-shadow",
            error && "ring-2 ring-apple-error ring-offset-2",
            className
          )}
          {...rest}
        />
        {error && (
          <p className="text-sm text-apple-error mt-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
