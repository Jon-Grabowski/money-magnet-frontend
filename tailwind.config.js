/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'mint-green':'#C0FFD0',
        'money-green': '#009933',
        'forest-green': '#00661F',
        'magnetic-plum': '#32004C',
        'magnetic-plum-light':'#53047c'
      }
    },
  },
  plugins: [],
}

