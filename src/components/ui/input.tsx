import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false)
  const isPassword = type === "password"

  if (!isPassword) {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-7 w-full min-w-0 rounded-md border border-input bg-input/20 px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      />
    )
  }

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        data-slot="input"
        className={cn(
          "h-7 w-full min-w-0 rounded-md border border-input bg-input/20 px-2 py-0.5 pr-10 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword((currentValue) => !currentValue)}
        className="absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        aria-pressed={showPassword}
      >
        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  )
}

export { Input }
