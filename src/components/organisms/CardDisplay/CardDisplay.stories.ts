import CardDisplay from "./CardDisplay.vue";

export default {
  component: CardDisplay,
  title: "Organisms/CardDisplay",
  args: {
    Cards: [
      {
        title: "teste1",
        Tag: "Tag",
        BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
      {
        title: "teste2",
        Tag: "Tag",
        BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
      {
        title: "teste3",
        Tag: "Tag",
        BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
    ],
    Variant: "Primary",
  },
};

export const Primary = {};

export const Secondary = {
  args: {
    Variant: "Secondary",
  },
};
