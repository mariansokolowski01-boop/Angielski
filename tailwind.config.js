/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF6ED',
          200: '#F4ECE0',
          300: '#E8DCC8',
        },
        forest: {
          50: '#F2F8F4',
          100: '#E1EFE4',
          300: '#86BF93',
          500: '#3A8A53',
          600: '#2A7240',
          700: '#1F5730',
          800: '#184325',
          900: '#11301A',
        },
        fox: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          300: '#FDBA74',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        moss: {
          500: '#65A30D',
          600: '#4D7C0F',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        }
      },
      fontFamily: {
        story: ['"Quicksand"', '"Fredoka"', 'system-ui', 'sans-serif'],
        hand: ['"Patrick Hand"', 'cursive']
      },
      boxShadow: {
        'wood': '0 8px 0 #9A3412, 0 14px 20px rgba(0,0,0,0.15)',
        'wood-hover': '0 5px 0 #9A3412, 0 8px 15px rgba(0,0,0,0.15)',
        'wood-active': '0 1px 0 #9A3412, 0 4px 10px rgba(0,0,0,0.15)',
        'leaf': '0 8px 0 #166534, 0 14px 20px rgba(0,0,0,0.12)',
        'paper': '0 10px 25px -5px rgba(120, 53, 15, 0.1), 0 8px 10px -6px rgba(120, 53, 15, 0.08)',
        'soft': '0 10px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
