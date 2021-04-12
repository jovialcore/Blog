module.exports = {
  purge: [  './dist/Home/home.html',
],
  darkMode: 'class',
  
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
      
plugins: [
  // ...
  require('tailwindcss'),
  require('autoprefixer'),
  // ...
]

}
