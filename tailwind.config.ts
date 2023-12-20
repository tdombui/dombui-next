import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
'blob': "blob 9s infinite"
      },
      keyframes: {
'blob': {
  "0%": {
    transform: "scale(1)",
  },
  "33%": {
    transform: "translate(30px, -50px) scale(1.2)",
  },
  // "50%": {
  //   transform: "translate(10px, -10px) scale(0.7)",
  // },
  "66%": {
    transform: "translate(-20px, 20px) scale(0.8)",
  },
  "100%": {
    transform: "translate(0px, 0px) scale(1)",
  },
},
      },
      blur: {
        xs: "1px",
      },
    },
  },
  plugins: [],
}


export default config
