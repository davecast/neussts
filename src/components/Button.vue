<template>
  <router-link
    class="btn"
    :class="[colorType]"
    :to="routeLink"
    v-slot="{ href, route, navigate }"
  >
    <a :href="href" @click="navigate" :style="styleButton">
      <slot></slot>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    routeLink: {
      type: String,
      default: "/"
    },
    background: {
      type: String,
      default: "ffffff"
    },
    color: {
      type: String,
      default: "2d2d2d"
    }
  },
  data() {
    return {
      styleButton: {
        color: `#${this.color}`,
        background: `#${this.background}`
      }
    };
  }
};
</script>

<style scoped>
.btn {
  display: block;
  margin: 0 auto;
  width: fit-content;
  padding: 10px 35px;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>
