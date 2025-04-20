import { z, defineCollection } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string().date(),
    endDate: z.string().optional(),
    currentJob: z.boolean().default(false),
    technologies: z.array(z.string()).optional(),
    order: z.number().default(99),
  }),
});

export const collections = {
  experience: experienceCollection,
};
