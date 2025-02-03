<template>
  <header class="Header">
    <nav class="Menu" ref="Menu">
      <ul class="Lista">
        <li v-for="nav in navLinks">
          <NuxtLink :to="nav.link" class="Link">{{ nav.title }}</NuxtLink>
        </li>
      </ul>
      <Button -variant="Primary" children="Contact" :onclick="ButtonClick"></Button>
    </nav>
    <div class="MenuHamburguer" :onclick="OpenNav">
      <div class="Menu-burguer1" />
      <div class="Menu-burguer2" />
    </div>
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
        title: "Home",
        link: "/",
      },
      {
        title: "Portifólio",
        link: "/Portifolio",
      },
    ]);
    return {
      navLinks,
    };
  },
  methods: {
    OpenNav(e) {
      e.currentTarget.classList.toggle("Open");
      this.$refs.Menu.classList.toggle("Open");
    },
    ButtonClick(){
      const router = useRouter()
      router.push({ path: "/Contact" })
    }
  },
};
</script>
<style>
.Header {
  background-color: #000000;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.Menu {
  position: absolute;
  top: 0;
  left: -300px;
  transition: 0.7s;
  background-color: #000000;
  padding: 30px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &.Open {
    left: 0;
  }
}

.MenuHamburguer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  width: 20px;
  height: 20px;

  .Menu-burguer1 {
    position: absolute;
    right: 10px;
    width: 10px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: 0.3s;
  }
  .Menu-burguer2 {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 10px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 2px;
    transition: 0.3s;
  }

  &.Open {
    .Menu-burguer1 {
      width: 12px;
      height: 2px;
      border-radius: 2px;
      transform: translate(2px, 0px) rotate(45deg);
      transition: 0.3s;
    }

    .Menu-burguer2 {
      width: 12px;
      height: 2px;
      border-radius: 2px;
      transform: translate(-3px, -5px) rotate(-45deg);
      transition: 0.3s;
    }
  }
}

.Lista {
  list-style: none;
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0;
}

.Link {
  text-decoration: none;
  color: #fff;
}

@media (min-width: 850px) {
  .Header {
    padding: 0 135px;
  }

  .Menu {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: static;
    padding: 0;
    width: 100%;
    height: auto;
  }

  .MenuHamburguer {
    display: none;
  }

  .Lista {
    display: flex;
    justify-content: space-between;
    width: 60%;
    flex-direction: row;
  }
}
</style>
