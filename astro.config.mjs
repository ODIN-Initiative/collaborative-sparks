// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://odin-initiative.github.io/',
	base: 'collaborative-sparks-website',
	trailingSlash: "never",
	integrations: [
		starlight({
			plugins: [starlightBlog()],
			title: 'Collaborative Sparks',
			social: {
				github: 'https://github.com/CollaborativeSparks',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'sparks' },
				},
				{ label: 'Resource Article Blog', link: '/blog/' },
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],

	output: 'static',  // Ensure it builds static assets
});



