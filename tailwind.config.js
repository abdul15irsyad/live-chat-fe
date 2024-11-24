import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  extend: {
    fontSize: {
      xxs: '0.625rem',
      lineHeight: '1rem',
    },
  },
};
export const plugins = [
  plugin(({ addVariant }) => {
    addVariant('not-disabled', '&:not(:disabled)');
  }),
];
