import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/lib/components",
			$assets: "src/lib/assets",
			$static: "static"
		},
		experimental: {
			remoteFunctions: true
		},
		csp:{
			directives: {
				'script-src': ['self']
			},
			// must be specified with either the `report-uri` or `report-to` directives, or both
			reportOnly: {
				'script-src': ['self'],
				'report-uri': ['/']
			}
		}
	},

	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

export default config;
