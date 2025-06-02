import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#3B82F6',   // Blue
          secondary: '#10B981', // Green
          background: '#F3F4F6',
          text: '#1F2937',
        },
        dark: {
          primary: '#3DADF2',   // Lighter Blue
          secondary: '#34D399', // Lighter Green
          background: '#17202a',
          text: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}