<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="item in items">
      <NuxtLink :to="item.link">
        <img class="Image"
          :src="item.src"
          alt=""
          draggable="false"
        /> </NuxtLink
    ></Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  items: {
    type: Object,
  },
  variant: {
    type: String,
    default: "Primary",
  },
});

const carouselConfig = {
  itemsToShow: props.variant == "Primary" ? 1 : 1.5,
  wrapAround: true,
  gap: 10
};
</script>
<style scoped>
.Image{
  width: 100%;
}
</style>
