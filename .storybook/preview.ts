import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
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