<template>
  <h1 v-if="type == 'Title'">{{ text }}</h1>
  <h4 v-if="type == 'Section'">{{ text }}</h4>
  <p class="TextBig" v-if="type == 'Subtitle'">{{ text }}</p>
  <p v-if="type == 'Text'">{{ text }}</p>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "Title"
    }
  }
}
</script>