/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				red: "hsl(0, 100%, 68%)",
				blue: "hsl(230, 11%, 40%)",
				white: "hsl(207, 33%, 95%)",
				gray: "hsl(231, 7%, 65%)",
				navy: "hsl(230, 29%, 20%)",
			},
		},
	},
	plugins: [],
};
