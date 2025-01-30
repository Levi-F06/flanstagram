import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: "Bagel Fat One"
      },
      colors: {
        black: "#262626",
        white: "#F9F9F1",
        purp: "#777DA7",
        coral: "#F49390"
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  }
} satisfies Config;
``