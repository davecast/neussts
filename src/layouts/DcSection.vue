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
    pdTop: {
      type: Boolean,
      default: true
    },
    pdBottom: {
      type: Boolean,
      default: true
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
        paddingTop: this.pdTop ? "70px" : "0px",
        paddingBottom: this.pdBottom ? "70px" : "0px"
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
