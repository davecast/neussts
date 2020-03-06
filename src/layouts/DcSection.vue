<template>
  <section class="section" :style="styleSection">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "DcSection",
  props: {
    backgroundImage: {
      type: String
    },
    attached: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    pd: {
      type: String,
      default: "70px 0px"
    },
    backgroundPosition: {
      type: String,
      default: "center center"
    },
    backgroundSize: {
      type: String,
      default: "cover"
    }
  },
  data() {
    return {
      styleSection: {
        backgroundImage: this.backgroundImage
          ? `url(${require(`@/assets/${this.backgroundImage}`)})`
          : "",
        backgroundAttachment: this.attached ? "fixed" : "initial",
        backgroundPosition: this.backgroundPosition,
        backgroundSize: this.backgroundSize,
        padding: this.pd
      }
    };
  }
};
</script>

<style scoped>
.section--background {
  background-size: cover;
}
.section--attached {
  background-attachment: fixed;
}
</style>
