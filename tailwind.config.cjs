/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    
    animatedSettings: {
      animatedSpeed: 1000,
      classes: ['infinite', 'headShake'], 
    }
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
};
