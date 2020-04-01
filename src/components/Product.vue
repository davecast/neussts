<template>
  <article class="product">
    <figure class="image">
      <img :src="require(`@/assets/${this.image}`)" :alt="this.title" />
    </figure>
    <h3 class="title">{{ this.title }}</h3>
    <p class="text">
      <slot></slot>
    </p>
  </article>
</template>

<script>
export default {
  name: "Product",
  props: {
    image: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>

<style scoped>
.image {
  max-width: 100%;
  margin-bottom: 15px;
}
.image img {
  max-width: 100%;
  width: 100%;
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
@media screen and (max-width: 595px) {
  .image {
    max-height: 250px;
    overflow: hidden;
  }
  .image img {
    object-fit: cover;
    height: 100%;
  }
}
</style>
