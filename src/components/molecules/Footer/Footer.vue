<template>
  <div class="Footer">
    <p class="TextGray --DarkMode">Photography</p>
    <p class="TextGray --DarkMode">Copyright</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>

.Footer {
    display: flex;
    background-color: #000;
    color: #fff;
    height: 171px;
    flex-direction: column;
    padding: 0 50px;
  }
@media (min-width: 850px) {
  .Footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 160px;
  }
}
</style>
