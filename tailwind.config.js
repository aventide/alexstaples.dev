/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			body: ["Lato", "sans-serif"],
			heading: ["Figtree", "sans-serif"],
		},
	},
	plugins: [require("daisyui")],
};
