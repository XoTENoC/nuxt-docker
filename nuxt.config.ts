// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: false },
	modules: ['@nuxt/fonts', '@nuxt/icon'],
	fonts: {
		families: [
			{ name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
			{ name: 'Roboto', provider: 'google', weights: [400, 500, 700] },
		],
		defaults: {
			preload: true,
		},
	},
	css: ['~/public/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
	},
})
