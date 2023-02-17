/** @type {import('tailwindcss').Config} */

const notiColors = {
  'grey-900': '#050505',
  'grey-800': '#1C1C1C',
  'grey-700': '#393939',
  'grey-600': '#555555',
  'grey-500': '#606060',
  'grey-400': '#BDBDBD',
  'grey-300': '#E0E0E0',
  'grey-200': '#EEEEEE',
  'grey-100': '#F5F5F5',
  'background': '#FAFAFA',
  'titan-900': '#1A237E',
  'titan-800': '#283593',
  'titan-700': '#303F9F',
  'titan-600': '#3949AB',
  'titan-500': '#3F51B5',
  'titan-400': '#5C6BC0',
  'titan-300': '#7986CB',
  'titan-200': '#9FA8DA',
  'titan-100': '#C5CAE9',
  'titan-50': '#E8EAF6',
  'jungle-700': '#005729',
  'jungle-600': '#0E7F42',
  'jungle-500': '#30B16C',
  'jungle-400': '#2DC573',
  'jungle-300': '#95ECBD',
  'jungle-200': '#C7F5DD',
  'jungle-100': '#E8FAF0',
  'freesia-700': '#520101',
  'freesia-600': '#740E0E',
  'freesia-500': '#B02D2D',
  'freesia-400': '#F45858',
  'freesia-300': '#FFA4A4',
  'freesia-200': '#FFD0D0',
  'freesia-100': '#FFF4F4',
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ["'Clash Display'", "sans-serif"],
        'futura': ["'Futura Md BT'", "sans-serif"]
      },
      fontSize: {
        'heading-0': ['240px', '288px'],
        'heading-1': ['64px', '78px'],
        'heading-2': ['48px', '60px'],
        'heading-3': ['28px', '36px'],
        'paragraph-b': ['18px', '30px'],
        'paragraph': ['16px', '30px'],
        'button': ['16px', '24px'],
        'caption': ['14px', '18px'],
        'misc': ['12px', '18px'],
      },
      colors: notiColors,
      backgroundColor: notiColors,
      maxWidth: {
        'desktop': '1512px',
      }
    },
    screens: {
      'desktop': '1512px',
      'mobile': '428px'
    }
  },
  plugins: [],
}
