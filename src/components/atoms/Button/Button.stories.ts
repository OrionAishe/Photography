import { type Meta, type StoryObj } from "@nuxtjs/storybook";
import Button from "./Button.vue";

export default {
  component: Button,
  title: "Atoms/Button",
  args: {
    children: "Button",
    Variant: "Primary",
  },
} as Meta;

export const Primary: StoryObj = {
};

export const Secondary = {
  args: {
    Variant: "Secondary",
  },
};
