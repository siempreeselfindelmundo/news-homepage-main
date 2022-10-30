/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors: {
      'softorange': 'hsl(35, 77%, 62%)',
      'softred': 'hsl(5, 85%, 63%)',
      'off-white': 'hsl(36, 100%, 99%)',
      'dark-gray-blue': 'hsl(236, 13%, 42%)',
      'gray-blue': 'hsl(233, 8%, 79%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)'
    },
    fontFamily: {
      'body': 'Inter'
    },
    extend: {},
  },
  plugins: [],
}

