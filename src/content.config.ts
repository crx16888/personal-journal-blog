import { defineCollection, z } from "astro:content";

const shared = {
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false)
};

const blog = defineCollection({
  type: "content",
  schema: z.object({
    ...shared,
    cover: z.string().optional(),
    deck: z.string().optional()
  })
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    ...shared,
    source: z.string().optional()
  })
});

export const collections = { blog, notes };
