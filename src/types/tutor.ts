import { z } from "zod"

export const createTutorSchema = z.object({
  user_id: z.number().int().min(1, { message: "user_id is required" }),
})

export type CreateTutor = z.infer<typeof createTutorSchema>
