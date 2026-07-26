import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdsvex } from 'mdsvex';
import relativeImages from "mdsvex-relative-images";

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			preprocess: [mdsvex({
                extensions: ['.svx', '.md'],
                remarkPlugins: [
                    relativeImages
    			]
            })],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});
