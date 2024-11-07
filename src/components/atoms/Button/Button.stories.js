import Button from './Button.vue';

export default {
  component: Button,
  title: 'Atoms/Button',
  args: {
    title: "Title",
    Variant: "Primary"
  },
};

export const Primary = {
};

export const Secondary = {
    args:{
        Variant: "Secondary"
    }
};