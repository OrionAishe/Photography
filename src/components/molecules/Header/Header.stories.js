import Header from './Header.vue';
import Button from '../../atoms/Button/Button.vue';

export default {
  component: Header,
  title: 'Molecules/Header',
  args: {
  },
};

export const Default = (args) => ({
  components: { Header, Button },
  setup() {
    return { args };
  },
  template: `<Header v-bind="args">
  </Header>`,
});