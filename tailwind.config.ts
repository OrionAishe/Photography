import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontSize: {
        h1: "72px",
        h2: "56px",
        h3: "40px",
        h4: "24px",
        h5: "16px",
        p: "16px",
      },
      fontWeight: {
        h1: "800",
        h2: "800",
        h3: "800",
        h4: "700",
        h5: "400",
        p: "400",
      }
    },
  },
};
