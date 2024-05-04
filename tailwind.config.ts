import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"

  ],
  theme: {
    fontFamily: {
      'kanit': ['"kanit"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
			colors: {
        primary: "#C0E7E5",
				primaryDark: "#1E1E22",
        secondary: "#3B3BFC",
				secondaryDark: "#D9610B",
        scanDark: "#DA6C1D",
        background: "#02000B",
        uscYellow: "#F0C546",
        grey: "#CFCFCF",
        success: "#239b06",
        grey100: "#989898",
        active: "#5FE0C7",
        grey_organ200: "#4D3D32",
        grey_organ300: "#342E29",
        black200: "#212529",
        gray100: "#fafafa",
        gray200: "#f5f5f5",
        gray300: "#ccc",
        gray400: "#bbb",
        gray500: "#888",
        gray550: "#6C757D",
        gray600: "#333",
        gray700: "#222",
        gray800: "#151515",
        gray900: "#111",
        dark: "#0a0a0a",
        dark900: "#212529",
        bgColor: "#fbfbfd",
        blue: "#0784C3",
        grey200: "#e9ecef"
      },
      backgroundColor :{
        primary: "#C0E7E5",
				primaryDark: "#1E1E22",
        secondary: "#3B3BFC",
				secondaryDark: "#D9610B",
        background: "#02000B",
        uscYellow: "#F0C546",
        grey: "#CFCFCF",
        success: "#239b06",
        grey100: "#989898",
        active: "#5FE0C7",
        grey_organ200: "#4D3D32",
        grey_organ300: "#342E29",
        black200: "#212529",
        gray100: "#fafafa",
        gray200: "#f5f5f5",
        gray300: "#ccc",
        gray400: "#bbb",
        gray500: "#888",
        gray550: "#6C7D75",
        gray600: "#333",
        gray700: "#222",
        gray800: "#151515",
        gray900: "#111",
        dark: "#0a0a0a",
        dark900: "#212529",
        bgColor: "#fbfbfd",
        blue: "#0784C3",
        white_98:"#F8F9FA",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1504px",
      },
      boxShadow:{
        inputValid:"box-shadow: 0 0 25px rgba(0, 201, 167, .1)",
        inputInValid:"box-shadow: 0 0 25px rgba(0, 201, 167, .1);"
      }
    },
  },
  plugins: [],
}
export default config
