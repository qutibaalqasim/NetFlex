/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{html,js}", 
    "node_modules/flowbite/**/*.js", 
     ],
  theme: {
    extend: {
      colors:{
        mainPage: "#141414",
        mainbutton: "#1A1A1A",
        secondarybutton: "#E50000",
      },
      screens:{
        mobile:"330px",
        navbar:"1256px",
        card:"1210px",
        labtop:"1400px",
      },
     
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

