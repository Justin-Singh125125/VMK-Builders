import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      common: {
        white: '#fff',
        black: '#000',
      },
      primary: {
        400: '#000',
      },
      secondary: {
        400: '#31c17c',
      },
    },
  },
  plugins: [],
};
export default config;
