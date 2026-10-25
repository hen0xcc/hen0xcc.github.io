import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Conservamos el esquema original del blog y añadimos uno para laboratorios.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const labs = defineCollection({
  loader: glob({ base: './src/content/labs', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).default([]),
    level: z.enum(['Inicial', 'Intermedio', 'Avanzado']).optional(),
    duration: z.string().optional(),
    objective: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, labs };
