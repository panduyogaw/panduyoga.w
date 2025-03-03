

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#f5b921',
      },
    },
  },
  darkMode: 'class',
  mode: 'jit',
  plugins: [
    function({addUtilities, theme}){
      const newUtilities = {
        '.stroke-text':{
          '--tw-text-opacity' : '1' ,
          '-webkit-text-stroke-width' : '1.4px',
           '-webkit-text-fill-color' : 'transparent',
           '-webkit-text-stroke-color' : theme('colors.secondary'),
        },
        '.text-stroke-primary' : {
          '-webkit-text-stroke-color' : theme('colors.primary'),
        },
        '.dark .text-stroke-secondary' : {
          '-webkit-text-stroke-color' : theme('colors.secondary'),
        }
      };
      addUtilities(newUtilities,['responsive' , 'dark']);
    }
  ],
}