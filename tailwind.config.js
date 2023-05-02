/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				hero: 'url(/images/main-bg.jpg)'
			},
			backgroundColor: {
				btnBg: '#f9b88e'
			}
		}
	},
	plugins: []
}
