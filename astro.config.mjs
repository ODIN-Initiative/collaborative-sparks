// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import starlightBlog from 'starlight-blog';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
	site: 'https://odin-initiative.github.io/collaborative-sparks-website/',
	base: '/collaborative-sparks-website',
	trailingSlash: "always",
	//vite: {    plugins: [],  },
	vite: {    plugins: [tailwindcss()],  },
	integrations: [
		starlight({
			//plugins: [starlightBlog()],
			title: 'Collaborative Sparks',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CollaborativeSparks'},
				{ icon: 'external', label: 'ODIN', href: 'https://www.odin.eco/'}
			   
			],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'sparks' },
				},
				{ 
					label: 'Links',
					items: [ 
						{
							label: 'ODIN website',
							link: 'https://odin.eco'
						},

					]
				},
				//{ label: 'Resource Article Blog', link: '/blog/' },
			],
			customCss: [],
		}),

	],

	output: 'static',  // Ensure it builds static assets
});



