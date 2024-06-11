/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,jsx,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xl': '1rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem', 
      '8xl': '6rem',      
      '9xl': '8rem',  
      // '10xl': '1.3rem',
      // '11xl': '1.675rem',
      '12xl': '1.8rem',
    },
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
        '140': '40rem',
        '142': '42rem',
      },
      lineHeight: {
        'less-snug': '1.35',
        'less-relaxed': '1.55',
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

