/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bellefair: ['Bellefair'],
      barlow: ['Barlow Condensed'],
    },
    extend: {
      animation: {
        fade: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 700ms ease-out',
      },
      colors: {
        'main-violet': '#D0D6F9',
      },
      backgroundImage: {
        'home-mobile': "url('assets/home/background-home-mobile.jpg')",
        'destination-mobile':
          "url('assets/destination/background-destination-mobile.jpg')",
        'crew-mobile': "url('assets/crew/background-crew-mobile.jpg')",
        // Add more classes as needed
      },
      height: {
        screen: '100dvh',
      },
      keyframes: {
        slideIn: {
          '0%': {
            opacity: '0',
            width: '0',
            pointerEvents: 'none',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(-18%, 0, 0)',
            pointerEvents: 'none',
          },
          '100%': { opacity: '1', pointerEvents: 'none' },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-', '& > *:hover');
    },
  ],
};
