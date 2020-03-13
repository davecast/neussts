<template>
  <section class="callAction" :style="styleSection">
    <div class="container__full">
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

@media screen and (max-width: 768px) {
  .grid__1--1 {
    grid-template: 1fr / 1fr;
  }
  .title__section,
  .text__content--normal {
    text-align: center;
  }
  .text__content--normal {
    margin: 0 auto 20px;
  }
  .btn {
    margin-left: auto !important;
  }
  .callAction--back--white {
    position: relative;
    display: flex;
  }
  .callAction--back--white::before {
    position: absolute;
    content: "";
    background: rgba(255, 255, 255, 0.85);
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
  }
  .callAction--back--white > div {
    z-index: 1;
  }
}

@media screen and (max-width: 595px) {
  .callAction--back--white {
    background-position: center right;
  }
  .grid__item--pd {
    text-align: center;
  }
}
</style>
