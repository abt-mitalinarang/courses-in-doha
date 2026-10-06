import { emailSchema, passwordSchema } from "@repo/core"
import { z } from "zod"

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type TLoginForm = z.infer<typeof loginSchema>
