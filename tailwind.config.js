/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/front-view-cologne-bottle-rotten-tree-branch-dark-blue-background-with-free-space.jpg')",
        'replica': "url('/src/assets/replica.jpg')",
        'wang': "url('/Users/shubokobir/Desktop/coding_projects/react/scent-store/src/assets/emily-wang-scent.jpg')",
        'maison':"url('/Users/shubokobir/Desktop/coding_projects/react/scent-store/src/assets/mainson-tahite.jpg')",
        'gigi':"url('/Users/shubokobir/Desktop/coding_projects/react/scent-store/src/assets/gigi.jpg')",
        'acne':"url('/src/assets/acne-studios.jpg')",
        'bella':"url('/src/assets/bella.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        cream: '#F0EBE0'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-justify-center': {
          'text-align': 'justify',
          'text-align-last': 'center',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
};
