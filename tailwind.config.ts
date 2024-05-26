import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      // 42px
      h1: '2.625rem',
      // 24px
      h3: '1.5rem',
      // 18px
      p: '1.125rem',
      // 18px
      label: '1.125rem',
      link: '1rem',
    },
    colors: {
      common: {
        white: '#fff',
        black: '#000',
      },
      primary: {
        400: '#000',
        300: '#161616',
        100: '#A4A4A4',
      },
      secondary: {
        400: '#31c17c',
      },
    },
  },
  plugins: [],
};
export default config;
