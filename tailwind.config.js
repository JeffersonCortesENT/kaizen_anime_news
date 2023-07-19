/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

// export default {
//   content: [
//     './resources/**/*.blade.php',
//     './resources/**/*.js',
//     './resources/**/*.jsx',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'header-upcoming': '#1f2937'
//       }
//     },
//   },
//   plugins: [
//   ],
// }

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
          'header-upcoming': '#1f2937'
        }
      },
    },
    plugins: [],
  }
)

