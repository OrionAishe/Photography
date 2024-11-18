<template>
  <UCarousel
    class="Carousel"
    v-slot="{ item }"
    :ui="{ item: 'basis-full' }"
    :items="items"
    arrows
    indicators
  >
    <img
      class="Image"
      :src="item"
      alt=""
      width="300"
      height="400"
      draggable="false"
    />
  </UCarousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    items: {
      type: Object,
    },
  },
};
</script>
<style>
.Carousel {
  display: flex;
  justify-content: center;
}
.Image {
  width: 100%;
  filter: grayscale(1);
}
</style>
