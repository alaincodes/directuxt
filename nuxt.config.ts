// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	components: [
		{ path: "~/components", pathPrefix: false },
		{ path: "~/components/block", pathPrefix: false },
		{ path: "~/components/shared", pathPrefix: false },
		{ path: "~/components/base", pathPrefix: false },
		{ path: "~/components/forms", pathPrefix: false },
	],
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL as string,
			directusUrl: process.env.DIRECTUS_URL as string,
		},
	},
	future: {
		compatibilityVersion: 4,
	},
	// Image Configuration - https://image.nuxt.com/providers/directus
	image: {
		providers: {
			directus: {
				provider: "directus",
				options: {
					baseURL: `${process.env.DIRECTUS_URL}/assets/`,
				},
			},
			local: {
				provider: "ipx",
			},
		},
	},
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image", "@pinia/nuxt"],
});
