/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slide: 'slide 0.3s ease forwards',
      },
    },
    variants: {
      extend: {
        after: ['hover'],
      },
    },
    screens: {
      'xs': '400px',
      'sm': '540px',
      'md': '768px',
      'lg': '992px',
    },
  },
  plugins: [
    function ({ addUtilities, e }) {
      addUtilities({
        '.hover-underline::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '6px',
          width: '0',
          height: '2px',
          backgroundColor: 'orange',
          transition: 'width 0.3s ease',
        },
        '.hover-underline:hover::after': {
          width: '100%',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

