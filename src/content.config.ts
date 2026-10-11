import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const servizi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/servizi" }),
  schema: z.object({
    numero: z.string(),
    ordine: z.number(),
    titolo: z.string(),
    sommario: z.string(),
    descrizione: z.string(),
    cosa: z.array(z.object({ titolo: z.string(), testo: z.string() })).length(4),
    faq: z.array(z.object({ domanda: z.string(), risposta: z.string() })),
  }),
});

export const collections = { servizi };
