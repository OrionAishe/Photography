<template>
  <div v-if="showModal" class="Modal__Backdrop">
    <div class="Modal__Body">
      <img
        class="Modal__Image"
        :src="modalSrc.src"
        :alt="modalSrc.alt"
        @click="OnClose"
      />
    </div>
  </div>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="item in items">
      <img
        class="Carousel__Image"
        :src="item.src"
        :alt="item.alt"
        draggable="false"
        @click="OnButtonClick(item)"
      />
    </Slide>
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
  autoplay: props.variant == "Primary" ? 5000 : 0,
  wrapAround: true,
  gap: 10,
  pauseAutoplayOnHover: true,
};

const modalSrc = ref({ src: "", alt: "" });
const showModal = ref(false);

function OnButtonClick(e) {
  if (props.variant == "Secondary") {
    modalSrc.value = { src: e.src, alt: e.alt };
    showModal.value = true;
    document.body.classList.toggle("Lock");
  } else {
    navigateTo({ path: e.link });
  }
}

function OnClose() {
  showModal.value = false;
  document.body.classList.toggle("Lock");
}
</script>
<style>
.Lock {
  position: relative;
  overflow: hidden;
}
.Carousel__Image {
  cursor: pointer;
}
.Modal__Backdrop {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.Modal__Body {
  display: flex;
  padding: 3%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  justify-content: center;
  align-items: center;
  background-color: blur();
}
.Modal__Image {
  height: 90vh;
}

.carousel__next,
.carousel__prev {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
}
.carousel__next:hover,
.carousel__prev:hover {
  color: #e5e5e5;
}
</style>
