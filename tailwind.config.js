/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT(
  {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.jsx',
    ],
    theme: {
      extend: {
        colors: {
          'navy': '#0B2447',
          'light-navy': '#19376D',
          'light-purple': '#576CBC',
          'celeste': '#A5D7E8',
          'celeste-contrast': '#4D0000',
          'light-blue': '#75C2F6',
          'yellow': '#F4D160',
          'light-yellow': '#FBEEAC',
          'pagination-border': '#1D5D9B',
          'title-section': '#0F084B',
          'light-pink': '#FE7BE5',
          'mid-purple': '#974EC3', 
          'dark-purple': '#504099', 
          'blue-gray': '#313866', 
          'mid-blue': '#1f71a9', //Sub Details
          'light-gray-blue': '#77b2d0', //Cast and Characters
          'light-gray': '#e7e7e7',
          'silver-shade': '#b8beca', //Producers
          'dark-blue-gray': '#577290', //Trailer
        },
        position: {
          'aspect-wrapper': {
            position: 'relative',
            width: '100%',
            paddingBottom: '56.25%', /* 16:9 aspect ratio */
          }
        },
        inset: {
          '0': '0',
          // ... other values ...
        },
        // Add your iframe styles here
        iframe: {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
    ],
  }
)

