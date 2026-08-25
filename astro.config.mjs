import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2, sandbox } from "@emdash-cms/cloudflare";
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
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			plugins: [formsPlugin()],
			sandboxed: [webhookNotifier],
			sandboxRunner: sandbox(),
			marketplace: "https://marketplace.emdashcms.com",
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Source Sans 3",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			styles: ["normal"],
			subsets: ["latin", "latin-ext", "vietnamese"],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Barlow Condensed",
			cssVariable: "--font-heading",
			weights: [500, 600, 700],
			styles: ["normal"],
			subsets: ["latin", "latin-ext", "vietnamese"],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
