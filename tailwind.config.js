/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: 'rgba(244, 244, 246, var(--tw-text-opacity))',
          200: 'rgba(222, 223, 227, var(--tw-text-opacity))',
          300: 'rgba(199, 202, 209, var(--tw-text-opacity))',
          400: 'rgba(177, 181, 190, var(--tw-text-opacity))',
          500: 'rgba(155, 160, 171, var(--tw-text-opacity))',
          600: 'rgba(133, 139, 153, var(--tw-text-opacity))',
          700: 'rgba(111, 118, 133, var(--tw-text-opacity))',
          800: 'rgba(86, 91, 103, var(--tw-text-opacity))',
          900: 'rgba(18, 25, 38, var(--tw-text-opacity))',
          950: 'rgba(48, 50, 57, var(--tw-text-opacity))',
        },
        primary:'rgb(80 87 234/var(--tw-text-opacity))'
      },
    },
  },
  plugins: [],
}

