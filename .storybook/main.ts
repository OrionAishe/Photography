import type { StorybookConfig } from "@storybook/vue3-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-webpack5-compiler-swc"],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    defaultName: "Documentation",
  },
  staticDirs: ["../public"],
};
export default config;
