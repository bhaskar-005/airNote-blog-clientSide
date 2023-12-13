/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'first_colour' :'#1565D8',
      'second_colour' :'#183B56',
      'third_colour' :'#0D2436',
      'white':"#F9FCFF",
      'red_colour':"#E75109"
    },
    screens: {
      'sm': '800px',
      // => @media (min-width: 640px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

