<template>
  <div class="feature">
    <figure class="feature__img">
      <img :src="require(`@/assets/${this.image}`)" />
    </figure>
    <h3 class="feature__text text--center text--yellow">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: {
    image: {
      type: String
    }
  }
};
</script>

<style scoped>
.feature {
  text-align: center;
}
.feature__img {
  max-width: 200px;
  margin: 0 auto 25px;
}
.feature__img img {
  max-width: 100%;
}
.feature__text {
  font-size: 18px;
  line-height: 24px;
}
@media screen and (max-width: 980px) {
  .feature__img {
    max-width: 150px;
    margin: 0 auto 20px;
  }
}
</style>
