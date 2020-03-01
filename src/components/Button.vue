<template>
  <router-link class="btn" :class="[colorType]" :to="routeLink">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Button",
  props: ["routeLink", "colorType"]
};
</script>

<style scoped>
.btn {
  display: block;
  margin: 0 auto;
  width: fit-content;
  padding: 10px 35px;
  background-color: #fff;
  color: #2d2d2d;
  border-radius: 5px;
}
.btn--yellow {
  background-color: #efdc30;
}
</style>
