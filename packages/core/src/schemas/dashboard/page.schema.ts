import { z } from "zod"

export const pageSchema = z.object({
  is_active: z.boolean().optional(),
  page_name: z.string(),
  page_meta_title: z.string(),
  page_slug: z.string(),
  page_long_description: z.string(),
})

export type TPageForm = z.infer<typeof pageSchema>
