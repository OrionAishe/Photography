<template>
  <button :class="classes" @click="onClick">
    {{ children }}
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Button",
  props: {
    Variant: {
      type: String,
      required: true,
      default: "Primary",
    },
    onClick: {},
    children: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const classes = computed(() => ["Button", `Button--${props.Variant}`]);
    return {
      classes,
    };
  },
};
</script>

<style>
.Button {
  border-radius: 10px;
  width: 170px;
  height: 48px;
  cursor: pointer;
  font-family: "Space Grotesk";
  font-size: 15px;
}

.Button--Primary {
  border: 1px solid #ffffff;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
  &:hover {
    border: 1px solid #e0e0e0;
    color: #e0e0e0;
  }
}

.Button--Secondary {
  background-color: #ffffff;
  color: #000;
  &:hover {
    background-color: #000;
    color: #ffffff;
  }
}
</style>
