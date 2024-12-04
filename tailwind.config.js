/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				accent: 'var(--accent)',
				hoverfg: 'var(--hoverfg)',
				hoverbg: 'var(--hoverbg)',
			},
		},
		keyframes: {
			shimmer: {
				'100%': {
					transform: 'translateX(100%)',
				},
			},
		},
	},
  plugins: [],
}

