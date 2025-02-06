<template>
  <UCarousel
    ref="carouselRef"
    class="Carousel"
    v-slot="{ item }"
    :ui="{ item: cardType }"
    :items="items"
    arrows
    indicators
  >
    <NuxtLink :to="item.link" :style="styles">
      <img
        :style="styles"
        :src="item.src"
        alt=""
        width="300"
        height="400"
        draggable="false"
      />
    </NuxtLink>
  </UCarousel>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Carousel",
  props: {
    items: {
      type: Object,
    },
    variant: {
      type: String,
      default: "Primary",
    },
  },
  setup(props) {
    const styles = computed(() => {
      if (props.variant == "Primary") {
        return {
          width: "100%",
          filter: "grayscale(1)",
        };
      } else {
        return {
          width: "99%",
        };
      }
    });
    const cardType = computed(() => {
      if (props.variant == "Primary") {
        return "basis-full";
      } else {
        return "basis-full md:basis-1/2";
      }
    });
    return { styles, cardType };
  },
  mounted() {
    const carouselRef = useTemplateRef('carouselRef')

    setInterval(() => {
      if (!carouselRef.value) return;

      if (
        carouselRef.value.page === carouselRef.value.pages
      ) {
        return carouselRef.value.select(0);
      }
      carouselRef.value.next();
    },10000);
  },
};
</script>
<style scoped>
.Carousel {
  display: flex;
  justify-content: center;
}
</style>
