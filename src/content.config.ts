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

const homeHero = defineCollection({
	loader: glob({
		pattern: 'index.md',
		base: './src/content/home-hero',
	}),
	schema: z.object({
		backgroundImage: z.string(),
		posterImage: z.string(),
		videoUrl: z.string().optional(),
		backgroundAlt: z.string(),
		logo: z.object({
			src: z.string(),
			alt: z.string(),
			width: z.number().default(300),
			height: z.number().default(300),
		}),
	}),
});

const homeIntro = defineCollection({
	loader: glob({
		pattern: 'index.md',
		base: './src/content/home-intro',
	}),
	schema: z.object({
		titleStart: z.string(),
		titleHighlight: z.string(),
		tagline: z.string(),
		subline: z.string(),
	}),
});

const sharedSectionBackground = defineCollection({
	loader: glob({
		pattern: 'index.md',
		base: './src/content/shared-section-background',
	}),
	schema: z.object({
		image: z.string(),
	}),
});

const homeTrainingInfo = defineCollection({
	loader: glob({
		pattern: 'index.md',
		base: './src/content/home-training-info',
	}),
	schema: z.object({
		title: z.string(),
		intro: z.string(),

		trainingCards: z.array(
			z.object({
				title: z.string(),
				text: z.string(),
			})
		),

		audience: z.object({
			title: z.string(),
			text: z.string(),
		}),

		bring: z.object({
			title: z.string(),
			items: z.array(z.string()),
		}),

		location: z.object({
			title: z.string(),
			addressLabel: z.string(),
			address: z.string(),
			accessLabel: z.string(),
			access: z.string(),
			transportLabel: z.string(),
			transport: z.string(),
			mapAddress: z.string(),
			mapsUrl: z.string(),
		}),

		cta: z.object({
			title: z.string(),
			text: z.string(),
			label: z.string(),
			href: z.string(),
		}),
	}),
});

export const collections = {
	downloads,
	faq,
    pricing,
    pricingPage,
    homeHero,
    homeIntro,
    sharedSectionBackground,
    homeTrainingInfo
};