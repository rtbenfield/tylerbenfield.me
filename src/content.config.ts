import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    titleHref: z.url(),
    eventName: z.string(),
    eventHref: z.url(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    youtubeId: z.string().optional(),
    link: z
      .object({
        text: z.string(),
        href: z.url(),
      })
      .optional(),
  }),
});

export const collections = { events };
