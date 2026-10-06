import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"
import { Label } from "./label"
import { Field, FieldDescription } from "./field"

function Input({
  lable,
  className,
  type,
  lableStyles,
  error,
  ref,
  ...props
}: React.ComponentProps<"input"> & {
  lable?: string
  lableStyles?: string
  error?: string
  ref?: React.Ref<HTMLInputElement>
}) {
  return (
    <Field>
      {lable && (
        <Label className="text-xs font-semibold text-gray-700">{lable}</Label>
      )}
      <InputPrimitive
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring/40 focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
          className
        )}
        {...props}
      />
      {error && <FieldDescription>{error}</FieldDescription>}
    </Field>
  )
}

export { Input }
