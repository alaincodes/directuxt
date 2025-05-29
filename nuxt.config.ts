// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],
});
