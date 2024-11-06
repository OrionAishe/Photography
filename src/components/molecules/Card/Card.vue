<template>
  <NuxtLink :to="link" class="Link">
    <div class="Card" :style="styles">
      <Tag
        ><template #title><slot name="Tag" /></template
      ></Tag>
      <h3 class="Title"><slot name="Title" /></h3>
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
      default: "body1",
    },
  },
  setup(props) {
    const styles = computed(() => ({
      backgroundImage: `url(${props.BGImage})`,
      width: props.Variant == 'header' ? '1170px' : props.Variant != '' ? '90%' : '370px',
      height: props.Variant == 'header' ? '720' : '416px'
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
  width: 370px;
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
  font-size: 40px;
  font-weight: 800;
  line-height: 48px;
  margin: 0;
}

.Link{
  text-decoration: none;
}
</style>
