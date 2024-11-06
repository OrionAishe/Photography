<template>
    <div class="Tag">
        <slot name="title" />
    </div>
</template>
<script>
export default {
    name: "Tag",
};
</script>
<style>
.Tag {
    background-color: #fff;
    color: #000;
    border-radius: 19px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    width: 84px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
