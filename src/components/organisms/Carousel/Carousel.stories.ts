import Carousel from "./Carousel.vue";

export default {
  component: Carousel,
  title: "Organisms/Carousel",
  args: {
    items: [
      {
        link: "/",
        src: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
      {
        link: "/",
        src: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
      {
        link: "/",
        src: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
      },
    ],
    variant: 'Primary'
  },
};

export const Primary = {};

export const Secondary = {
  args: {
    variant: 'Secondary'
  }
};
