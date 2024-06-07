/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,jsx,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          'dark-blue': 'var(--root-primary-color)',
        },
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/storefront.jpg')",
      },
      backgroundPosition: {
        's-axis': '0rem -5rem',
      },
      backgroundSize: {
        '100%': '100%',
      },
      height: {
        '140': '40rem',
      },
      textColor: {
        skin: {
          'dark-blue': 'var(--root-primary-color)',
        },
      },
      width: {
        '140': '40rem',
        '154': '54rem',
      }
    },
    screens: {
      'sm': '640px',
      'lg': '1024px',
    },
  },
  plugins: [],
}

