/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      code: ['JetBrains Mono', 'monospace']
    },
    extend: {},
  },
  daisyui: {
    themes: ["night"
    ],
  },
  plugins: [require("daisyui")],
};
