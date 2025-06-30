import { z, defineCollection } from 'astro:content'

const experienceCollection = defineCollection({
  schema: z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string().date(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    technologies: z.array(z.string()).optional(),
    order: z.number().default(99),
  }),
})

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      technologies: z.array(z.string()).optional(),
      links: z.array(z.object({ name: z.string(), url: z.string() })).optional(),
      order: z.number().default(99),
      image: image().optional(),
    }),
})

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
}
