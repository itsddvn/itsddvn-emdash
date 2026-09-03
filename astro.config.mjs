import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import react from "@astrojs/react";
import { d1, kvCache, r2, sandbox } from "@emdash-cms/cloudflare";
import { formsPlugin } from "@emdash-cms/plugin-forms";
import webhookNotifier from "@emdash-cms/plugin-webhook-notifier";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	i18n: {
		defaultLocale: "vi",
		locales: ["vi", "en"],
		fallback: { en: "vi" },
	},
	output: "server",
	server: {
		allowedHosts: ["itsddvn-dev.cppsw.com"],
	},
	adapter: cloudflare(),
	cache: {
		provider: cacheCloudflare(),
	},
	routeRules: {
		"/": { maxAge: 300, swr: 86400 },
		"/contact": { maxAge: 300, swr: 86400 },
		"/posts": { maxAge: 300, swr: 86400 },
		"/posts/[...slug]": { maxAge: 300, swr: 86400 },
		"/pages/[...slug]": { maxAge: 300, swr: 86400 },
		"/category/[...slug]": { maxAge: 300, swr: 86400 },
		"/tag/[...slug]": { maxAge: 300, swr: 86400 },
		"/search": { maxAge: 300, swr: 86400 },
		"/rss.xml": { maxAge: 300, swr: 86400 },
		"/en/": { maxAge: 300, swr: 86400 },
		"/en/[...path]": { maxAge: 300, swr: 86400 },
	},
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			objectCache: kvCache({ binding: "CACHE" }),
			plugins: [formsPlugin()],
			sandboxed: [webhookNotifier],
			sandboxRunner: sandbox(),
			marketplace: "https://marketplace.emdashcms.com",
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Be Vietnam Pro",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			styles: ["normal"],
			subsets: ["latin", "latin-ext", "vietnamese"],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Fira Code",
			cssVariable: "--font-mono",
			weights: [400, 500, 600],
			styles: ["normal"],
			subsets: ["latin", "latin-ext", "vietnamese"],
			fallbacks: ["monospace"],
		},
	],
	devToolbar: { enabled: false },
});
