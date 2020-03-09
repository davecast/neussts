<template>
  <header class="title" :class="classTitle" :style="styleHeader">
    <h3 v-if="subtitle" class="title__second">{{ subtitle }}</h3>
    <h2 class="title__first" :style="styleTitle">
      {{ title }}
    </h2>
  </header>
</template>

<script>
export default {
  name: "NeTitle",
  props: {
    title: {
      type: String,
      default: "Esto es un titulo"
    },
    subtitle: {
      type: String
    },
    position: {
      type: String,
      default: "center"
    },
    color: {
      type: String,
      default: "222222"
    },
    textTransform: {
      type: String,
      default: "uppercase"
    },
    twoLines: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      classTitle: {
        title__left: this.position === "left",
        title__right: this.position === "right"
      },
      styleTitle: {
        color: `#${this.color}`,
        textTransform: this.textTransform,
        lineHeight: this.twoLines ? "32px" : ""
      },
      styleHeader: {
        textAlign: this.position
      }
    };
  }
};
</script>

<style scoped>
.title {
  position: relative;
  padding-bottom: 35px;
  margin-bottom: 35px;
}
.title::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 4px;
  background: #efdc30;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: -2px;
}
.title.title__left::before {
  right: auto;
}
.title.title__right::before {
  left: auto;
}
.title__first {
  font-size: 28px;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: 900;
}
.title__second {
  color: #aaaaaa;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}
</style>
