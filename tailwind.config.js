/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e5eee8',
          200: '#ccdccf',
          300: '#a7c3ac',
          400: '#7fa487',
          500: '#608769',
          600: '#4b6c53',
          700: '#3c5643',
          800: '#334638',
          900: '#2b3a30',
        },
        lavender: {
          50: '#f7f6fd',
          100: '#eeebfc',
          200: '#ded7fa',
          300: '#c5b8f6',
          400: '#a58ef0',
          500: '#8765e6',
          600: '#7547d9',
          700: '#6337c2',
          800: '#522fa3',
          900: '#442884',
        },
      },
      animation: {
        'breathe': 'breathe 16s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.85' },
          '25%': { transform: 'scale(1.35)', opacity: '1' },
          '50%': { transform: 'scale(1.35)', opacity: '0.95' },
          '75%': { transform: 'scale(1)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
