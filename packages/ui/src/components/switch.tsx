"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      {...props}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full",
        "bg-gray-500",
        "data-checked:bg-black",
        className
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-6 w-6 rounded-full bg-white shadow",
          "translate-x-0",
          "data-checked:translate-x-5"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
