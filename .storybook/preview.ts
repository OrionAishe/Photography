import type { Preview } from "@nuxtjs/storybook";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "",
      values: [
        {
          name: "dark-mode",
          value: "#233037",
        },
        {
          name: "light-mode",
          value: "#EDF2F5",
        },
      ],
    },
    
  },
};

export default preview;