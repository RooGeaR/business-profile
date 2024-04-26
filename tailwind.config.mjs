/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				primary1: "var(--color-primary-1)",
				secondary: "var(--color-secondary)",
				icon: "var(--color-icon)",
				accent: {
					light: "var(--color-accent-light)",
					dark: "var(--color-accent-dark)"
				}
			}
		},
	},
	plugins: [],
}
