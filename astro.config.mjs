// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
//import starlightBlog from 'starlight-blog';
import tailwindcss from "@tailwindcss/vite";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";
import { watchObsidianVault } from "./vaultWatcher.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://odin-initiative.github.io/collaborative-sparks-website/",
    // base: "/collaborative-sparks-website",
    // trailingSlash: "always",
    //vite: {    plugins: [],  },
    vite: { plugins: [tailwindcss()] },
    integrations: [
        watchObsidianVault("./authoring"),
        starlight({
            //plugins: [starlightBlog()],
            title: "Collaborative Sparks",
            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/ODIN-Initiative/collaborative-sparks-website" },
                { icon: "external", label: "ODIN", href: "https://www.odin.eco/" },
            ],
            plugins: [
                starlightObsidian({
                    vault: "./authoring",
                    output: "o",
                    copyFrontmatter: "all",
                    // ignore: ["Blog"],
                    sidebar: {
                        label: "Guides",
                        collapsed: false,
                        collapsedFolders: false,
                    }
                }),
            ],
            sidebar: [
                {
                    label: "Latest News",
                    autogenerate: { directory: "sparks" },
                },
                {
                    label: "Blog",
                    autogenerate: { directory: "content/docs/o/_Blog" },
                },
                obsidianSidebarGroup,
                {
                    label: "Links",
                    items: [
                        {
                            label: "ODIN website",
                            link: "https://odin.eco",
                        },
                    ],
                },
                //{ label: 'Resource Article Blog', link: '/blog/' },
            ],
            customCss: ["./src/styles/global.css"],
        }),
    ],

    output: "static", // Ensure it builds static assets
});
