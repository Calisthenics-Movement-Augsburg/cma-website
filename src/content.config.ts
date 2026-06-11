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

const faq = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/faq',
	}),
	schema: z.object({
		question: z.string(),
		answer: z.string(),
		column: z.enum(['left', 'right']),
		order: z.number(),
	}),
});

const pricingPage = defineCollection({
	loader: glob({
		pattern: 'index.md',
		base: './src/content/pricing-page',
	}),
	schema: z.object({
		title: z.string(),
		paragraphs: z.array(z.string()),
	}),
});

const pricing = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/pricing',
	}),
	schema: z.object({
		name: z.string(),
		tagline: z.string(),
		description: z.string(),
		features: z.array(z.string()),
		options: z.array(
			z.object({
				price: z.string(),
				cents: z.string(),
			})
		),
		order: z.number(),
		highlight: z.boolean().default(false),
	}),
});

export const collections = {
	downloads,
	faq,
    pricing,
    pricingPage
};