<template>
  <header class="Header">
    <ul class="Lista">
      <li v-for="nav in navLinks">
        <NuxtLink :to="nav.link" class="Link">{{ nav.title }}</NuxtLink>
      </li>
    </ul>
    <Button -variant="Primary"><template #title>Contact</template></Button>
  </header>
</template>

<script>
import Button from "../../atoms/Button/Button.vue";

export default {
  name: "Header",
  components: {
    Button,
  },
  setup() {
    const navLinks = computed(() => [
      {
        title: "Teste",
        link: "/",
      },
      {
        title: "Teste",
        link: "/",
      },
      {
        title: "Teste",
        link: "/",
      },
    ]);
    return {
      navLinks,
    };
  },
};
</script>
<style>
.Header {
  background-color: #000000;
  display: flex;
  padding: 0 135px;
  align-items: center;
  height: 80px;
  justify-content: space-between;
}

.Lista {
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 500px;
}

.Link {
  text-decoration: none;
  color: #fff;
}
</style>
