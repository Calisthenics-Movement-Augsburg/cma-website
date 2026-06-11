import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const downloads = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/downloads',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		format: z.string().default('PDF'),
		file: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	downloads,
};