import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const directus = createDirectus(config.directusUrl).with(rest());

	return {
		provide: {
			directus,
			readItem,
			readItems,
		},
	};
});
