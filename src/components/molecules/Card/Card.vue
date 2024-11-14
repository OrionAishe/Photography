<template>
  <NuxtLink :to="link" class="Link">
    <div class="Card" :style="styles">
      <Tag :title="Tag"></Tag>
      <h3 class="Title">{{ title }}</h3>
    </div>
  </NuxtLink>
</template>
<script>
import Tag from "../../atoms/Tag/Tag.vue";
import { computed } from "vue";

export default {
  name: "Card",
  components: {
    Tag,
  },
  props: {
    BGImage: {
      type: String,
      required: true,
      default: "/3ed3437ad8ff2bcc66ef90939f91d7dc.png",
    },
    link: {
      type: String,
      required: true,
    },
    Variant: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    Tag: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const styles = computed(() => ({
      backgroundImage: `url(${props.BGImage})`,
      height: props.Variant == "header" ? "720" : "416px",
    }));
    return {
      styles,
    };
  },
};
</script>
<style scoped>
.Card {
  background-size: cover;
  width: auto;
  height: 416px;
  border-radius: 6px;
  padding: 51px 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 24px;
}

.Title {
  color: #fff;
  margin: 0;
}

.Link {
  text-decoration: none;
}
</style>
