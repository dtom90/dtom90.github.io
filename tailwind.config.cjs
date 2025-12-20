/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0f172a',
        },
        text: {
          primary: '#94a3b8',
          secondary: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['48px', { lineHeight: '48px' }],
        'heading-2': ['20px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'nav': ['16px', { lineHeight: '26px' }],
      },
      spacing: {
        '18': '64px',
      },
    },
  },
  plugins: [],
};


