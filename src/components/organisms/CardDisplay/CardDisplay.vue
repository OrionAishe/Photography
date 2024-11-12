<template>
  <div :class="classes">
    <div v-for="(item, index) in Cards" :style="styles[index]">
      <Card
        :-b-g-image="item.BGImage"
        :link="item.link"
        :-variant="variants[index]"
        :-tag="item.Tag"
        :title="item.title"
      />
    </div>
  </div>
</template>
<script>
import Card from "../../molecules/Card/Card.vue";
import { computed } from "vue";

export default {
  name: "CardDisplay",
  components: {
    Card,
  },
  props: {
    Variant: {
      type: String,
      required: true,
      description: "Primary" | "Secondary",
    },
    Cards: {
      type: Object,
      required: true,
      default: [
        {
          Title: "Titulo",
          Tag: "Tag",
          BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
          link: "",
        },
        {
          Title: "Titulo",
          Tag: "Tag",
          BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
          link: "",
        },
        {
          Title: "Titulo",
          Tag: "Tag",
          BGImage: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
          link: "",
        },
      ],
    },
  },
  setup(props) {
    const classes = computed(() => [
      "CardDisplay",
      `CardDisplay--${props.Variant}`,
    ]);
    if (props.Variant == "Primary") {
      const styles = computed(() => []);
      const variants = computed(() => []);
      return {
        classes,
        styles,
        variants,
      };
    } else {
      const styles = computed(() => [
        { "grid-area": "header" },
        { "grid-area": "body1" },
        { "grid-area": "body2" },
        { "grid-area": "body3" },
        { "grid-area": "body4" },
        { "grid-area": "body5" },
        { "grid-area": "body6" },
      ]);
      const variants = computed(() => [
        "header",
        "body1",
        "body2",
        "body3",
        "body4",
      ]);
      return {
        classes,
        styles,
        variants,
      };
    }
  },
};
</script>
<style>
.CardDisplay {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (min-width: 800px) {
  .CardDisplay--Primary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 0 135px;
  }

  .CardDisplay--Secondary {
    display: grid;
    grid-template-areas: "header header" "body1 body2" "body3 body4";
    grid-row-gap: 30px;
  }
}
</style>
