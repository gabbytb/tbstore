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
        'd-axis': '0 5rem',
      },
      backgroundSize: {
        '100%': '100%',
      },
      height: {
        // '124': '24rem',
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
      'sm': '764px',
      'lg': '1024px',
    },
  },
  plugins: [],
}

