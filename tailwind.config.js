 //@type {import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
      fontFamily: {
      sans: [
        '"Plus Jakarta Sans", sans-serif',
      ],
    },
  },
   plugins: [
       'postcss-import': {},
   ],
}
