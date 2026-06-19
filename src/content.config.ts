import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const baseSchema = z.object({
  title: z.string(),
  titleHref: z.url(),
  startDate: z.string(),
  endDate: z.string(),
  youtubeId: z.string().optional(),
  link: z
    .object({
      text: z.string(),
      href: z.url(),
    })
    .optional(),
});

const eventEntry = baseSchema.extend({
  event: z.object({
    name: z.string(),
    href: z.url(),
    location: z.string().optional(),
  }),
});

const podcastEntry = baseSchema.extend({
  podcast: z.object({
    name: z.string(),
    href: z.url(),
    episode: z.string().optional(),
    spotify: z.url().optional(),
    pocketCasts: z.url().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.union([eventEntry, podcastEntry]),
});

export const collections = { events };
