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
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '70%': '70%',
        '100%': '100%',
        '120': '100rem',
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

