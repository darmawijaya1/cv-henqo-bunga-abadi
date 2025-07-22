/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Untuk Next.js 13+ App Router
  ],
  darkMode: 'class', // mode gelap bisa aktif jika ingin
  theme: {
    extend: {
      colors: {
        // Custom warna orange untuk tema eksklusif
        orange: {
          50:  '#FFF8F1',
          100: '#FEECDC',
          200: '#FFD2AE',
          300: '#FFB87F',
          400: '#FF993F',
          500: '#FF7A00',   // warna utama branding
          600: '#DB6300',
          700: '#B74F00',
          800: '#933C00',
          900: '#7A2F00',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        // Tambahkan font lain sesuai kebutuhan
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'elegant': '0 4px 24px 0 rgba(255,122,0,0.15)', // shadow orange elegan
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
