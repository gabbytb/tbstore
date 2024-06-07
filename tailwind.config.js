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

