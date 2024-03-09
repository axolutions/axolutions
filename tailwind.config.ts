import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#09090B",
        },
      },
    },
  },
};
