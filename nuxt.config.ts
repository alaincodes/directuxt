// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL
    }
  },
	future: {
		compatibilityVersion: 4,
	},
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: [
		"@nuxt/eslint",
		"@nuxt/icon",
		"@nuxt/image",
		"@pinia/nuxt",
	],
});
