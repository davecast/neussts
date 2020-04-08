<template>
  <article class="product">
    <div class="product__overlay" :class="overlayClass"></div>
    <div class="product__close" :class="closeClass">
      <i @click="togglePop" class="wz-icon wz-closed"></i>
    </div>
    <div class="product__pop" :class="productClass">
      <figure class="image">
        <img :src="require(`@/assets/${this.image}`)" :alt="this.title" />
      </figure>
      <h3 class="title">{{ this.title }}</h3>
      <div class="text">
        <slot></slot>
      </div>
      <div class="action" @click="togglePop">
        See more <i class="wz-icon wz-arrow-right"></i>
      </div>
    </div>
  </article>
</template>

<script>
const $body = document.querySelector("body");

export default {
  name: "Product",
  props: {
    image: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    togglePop() {
      this.isOpen = !this.isOpen;
      $body.classList.toggle("body__overflow");
    }
  },
  computed: {
    productClass: function() {
      return {
        product__pop__active: this.isOpen
      };
    },
    overlayClass: function() {
      return {
        product__overlay__active: this.isOpen
      };
    },
    closeClass: function() {
      return {
        product__close__active: this.isOpen
      };
    }
  }
};
</script>

<style scoped>
.image {
  max-width: 100%;
  margin-bottom: 15px;
  height: 278px;
}
.image img {
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
}
.image__contain .image img {
  object-fit: contain;
}
.title {
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 15px;
  color: #2d2d2d;
}
.title::before {
  content: "";
  position: absolute;
  width: 75px;
  height: 3px;
  background: #efdc30;
  margin: 0 auto;
  left: 0;
  right: auto;
  bottom: -2px;
}
.text {
  font-size: 16px;
  line-height: 24px;
  color: #aaaaaa;
  height: 130px;
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
}
.text::before {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
}
.action {
  display: inline;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity 0.3s ease-in;
}
.action i {
  font-size: 12px;
  line-height: 12px;
  margin-left: 5px;
}
.action:hover {
  color: #efdc30;
}
.product__feature {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
  padding: 5px 0px 10px;
}
.product__feature li {
  font-size: 12px;
  line-height: 12px;
  padding: 5px 10px;
  background: rgb(45, 45, 45);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.8px;
  margin-right: 5px;
  margin-bottom: 5px;
}
.product__pop {
  position: relative;
  top: 0;
  left: 0;
  transition: position 0.3s ease-in 0.1s;
}
.product__close {
  position: fixed;
  visibility: hidden;
  z-index: 12;
  top: 50px;
  right: 65px;
}
.product__close i {
  cursor: pointer;
  color: #fff;
  font-size: 32px;
  transition: all 0.2s ease-in;
}
.product__close i:hover {
  color: #efdc30;
}
.product__close__active {
  visibility: visible;
}
.product__overlay {
  position: fixed;
  content: "";
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.85);
  transition: opacity 0.2s ease-in;
}
.product__overlay__active {
  opacity: 1;
  bottom: 0;
}
.product__pop__active {
  position: fixed;
  top: 100px;
  left: 0;
  max-width: 768px;
  box-sizing: border-box;
  height: calc(100vh - 200px);
  overflow-y: auto;
  right: 0;
  margin: 0 auto;
  z-index: 9999;
  background-color: #fff;
  padding: 35px 40px;
  transition: padding 0.3s ease-in;
}

.product__pop__active .action {
  height: 0;
  overflow: hidden;
  opacity: 0;
}
.product__pop__active .text {
  height: auto;
}
.product__pop__active .text::before {
  content: none;
}
.product__pop__active .image {
  height: auto;
  width: auto;
  max-width: 595px;
  display: flex;
  align-items: center;
}
.product__pop__active .image img {
  width: auto;
  height: auto;
  object-fit: contain;
  max-height: 300px;
}
@media screen and (max-width: 800px) {
  .product__pop__active {
    max-width: calc(100vw - 160px);
  }
  .product__close {
    top: 35px;
    right: 35px;
  }
}
@media screen and (max-width: 595px) {
  .image {
    max-height: 250px;
    overflow: hidden;
  }
  .image img {
    object-fit: cover;
    height: 100%;
  }
  .product__pop__active {
    padding: 20px;
    max-width: calc(100vw - 60px);
  }
}
</style>
