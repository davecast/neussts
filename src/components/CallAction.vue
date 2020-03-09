<template>
  <section class="callAction" :style="styleSection">
    <div class="container container__full">
      <div class="grid grid__1--1">
        <div class="grid__item--pd pd__left--col">
          <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CallContact",
  props: {
    backgroundImage: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: "#ffffff"
    }
  },
  data() {
    return {
      styleSection: {
        backgroundImage: this.backgroundImage
          ? `url(${require(`@/assets/${this.backgroundImage}`)})`
          : "",
        backgroundColor: this.backgroundColor
      }
    };
  }
};
</script>

<style scoped>
.callAction {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
