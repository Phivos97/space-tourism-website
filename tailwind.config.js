/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bellefair: ['Bellefair'],
      barlow: ['Barlow Condensed'],
    },
    extend: {
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
    },
  },
  plugins: [],
};
