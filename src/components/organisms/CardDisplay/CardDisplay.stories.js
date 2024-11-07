import CardDisplay from "./CardDisplay.vue";
import Card from "../../molecules/Card/Card.vue";

export default {
  component: CardDisplay,
  title: "Organisms/CardDisplay",
  args: {
    Cards: [
      {
        Title: "teste1",
        Tag: "Tag",
        BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
      {
        Title: "teste2",
        Tag: "Tag",
        BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
      {
        Title: "teste3",
        Tag: "Tag",
        BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
    ],
    Variant: "Primary",
  },
};

export const Primary = (args) => ({
  components: { CardDisplay, Card },
  setup() {
    return { args };
  },
  template: `<CardDisplay v-bind="args">
  </CardDisplay>`,
});

export const Secondary = (args) => ({
  components: { CardDisplay, Card },
  setup() {
    return { args };
  },
  template: `<CardDisplay v-bind="args">
  </CardDisplay>`,
});

Secondary.args = {
  Variant: 'Secondary'
};