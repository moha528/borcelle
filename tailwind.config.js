import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      "primary/red": "#e43a05",
      "primary/red/accent": "#af3009",
      "primary/green": "#20ab47",
      "primary/green/accent": "#0e752b",
      "primary/orange": "#fea529",
      "primary/orange/accent": "#aa670a",
      "neutral/20": "#eeeeee",
      "neutral/80": "#22222a",
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
