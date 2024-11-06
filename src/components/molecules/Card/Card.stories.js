import Card from "./Card.vue";
import Tag from "../../atoms/Tag/Tag.vue";

export default {
  component: Card,
  title: "Molecules/Card",
  args: {
    backgroundImage: "/public/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
    Variant: ''
  },
};

export const Default = (args) => ({
  components: { Card, Tag },
  setup() {
    return { args };
  },
  template: `<Card v-bind="args">
      <template #Title>Titulo</template>
      <template #Tag>Tag</template>
    </Card>`,
});
