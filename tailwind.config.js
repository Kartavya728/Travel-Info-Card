/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#051A24',
          secondary: '#0D212C',
        },
        light: {
          DEFAULT: '#F6FCFF',
          muted: '#E0EBF0',
        },
        muted: '#273C46',
      },
      fontFamily: {
        sans: ['PP Neue Montreal', 'sans-serif'],
        serif: ['PP Mondwest', 'serif'],
        mono: ['monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-mobile': 'marquee 10s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
