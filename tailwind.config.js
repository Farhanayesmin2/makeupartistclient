const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {

	content: ["./src/**/*.{html,js}",
	'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, 
			sky: colors.sky, 
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray, 	
			trueGray: colors.trueGray, 	
			blueGray: colors.blueGray, 
			coolGray: colors.coolGray, 	
			gray: colors.gray,
			slate: colors.slate, 		
			zinc: colors.zinc, 			
			neutral: colors.blueGray, 	
			stone: colors.stone, 		
		},
    extend: {},
  },
  plugins: [ require('flowbite/plugin')],
}
