// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import starlightBlog from 'starlight-blog';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
	site: 'https://odin-initiative.github.io/collaborative-sparks-website/',
	base: '',
	trailingSlash: "never",
	//vite: {    plugins: [],  },
	vite: {    plugins: [tailwindcss()],  },
	integrations: [
		starlight({
			//plugins: [starlightBlog()],
			title: 'Collaborative Sparks',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CollaborativeSparks'}
			   
			],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'sparks' },
				},
				//{ label: 'Resource Article Blog', link: '/blog/' },
			],
			customCss: [],
		}),

	],

	output: 'static',  // Ensure it builds static assets
});



