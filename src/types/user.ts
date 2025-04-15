import { z } from "zod"

export const createUserSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "A valid email address is required" }),
})

export type CreateUser = z.infer<typeof createUserSchema>
