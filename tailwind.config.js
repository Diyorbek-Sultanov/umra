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
				btnBg: '#f9b88e',
				social: '#232323'
			},
			colors: {
				orange: '#f9b88e'
			},
			gridTemplateColumns: {
				offerDetail: '8fr 4fr',
				learn: '7fr 5fr',
				footer: '3fr 9fr',
				responsiveMd: 'repeat(2, 300px)',
				responsiveSm: 'repeat(1, 300px)',
				responsiveLg: 'repeat(3, 300px)',
				responsiveRevSm: 'repeat(1, 120px)',
				responsiveRevMd: 'repeat(2, 120px)'
			},
			rotate: {
				rot: '99deg'
			},
			screens: {
				xs: '599px'
			}
		}
	},
	plugins: []
}
