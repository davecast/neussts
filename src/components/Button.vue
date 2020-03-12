<template>
  <router-link
    v-if="!onClickable"
    class="btn"
    :to="routeLink"
    v-slot="{ href, route, navigate }"
  >
    <a :href="href" @click="navigate" :style="styleButton">
      <span>
        <slot></slot>
      </span>
    </a>
  </router-link>
  <button @click="buttonClick" v-else class="btn" :style="styleButton">
    <slot></slot>
  </button>
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
    },
    align: {
      type: String,
      default: "center"
    },
    onClickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleButton: {
        color: `#${this.color}`,
        background: `#${this.background}`,
        marginLeft: this.align === "left" ? "0" : "auto",
        marginRight: this.align === "right" ? "0" : "auto"
      }
    };
  },
  methods: {
    buttonClick() {
      this.$emit("custom-click");
    }
  }
};
</script>

<style scoped>
.btn {
  font-size: 16px;
  line-height: 16px;
  font-family: "Muli", sans-serif;
  appearance: none;
  border: none;
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease-in;
}
.btn:hover {
  background: #2d2d2d !important;
  color: #fff !important;
  transform: translateY(-1.5px);
}
.btn:active,
.btn:focus {
  outline: none;
  box-shadow: none;
}

@media screen and (max-width: 768px) {
  .btn {
    font-size: 14px;
    line-height: 14px;
    padding: 10px 20px;
  }
}
</style>
