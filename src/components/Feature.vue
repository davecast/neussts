<template>
  <div class="feature">
    <figure class="feature__img" :class="{ feature__img__link: link }">
      <router-link v-if="link" :to="this.link">
        <img :src="require(`@/assets/${this.image}`)" />
      </router-link>
      <img v-else :src="require(`@/assets/${this.image}`)" />
    </figure>
    <h3 class="feature__text text--center text--black">
      <router-link class="feature__link" v-if="link" :to="this.link">
        <slot></slot>
      </router-link>
      <span v-else>
        <slot></slot>
      </span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: {
    image: {
      type: String
    },
    link: {
      type: String,
      default: undefined
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
.feature__link {
  color: #2d2d2d;
}
.feature__link:hover {
  color: #efdc30;
}
.feature__img__link {
  transition: all 0.2s ease-in-out;
}
.feature__img__link:hover {
  transform: scale(1.05);
}
@media screen and (max-width: 980px) {
  .feature__img {
    max-width: 150px;
    margin: 0 auto 20px;
  }
}
@media screen and (max-width: 768px) {
  .feature {
    display: grid;
    grid-gap: 10px;
    grid-template: 1fr / repeat(12, 1fr);
    grid-template-areas: "image image image image text text text text text text text text";
  }
  .feature__img {
    grid-area: image;
    margin: 0;
  }
  .feature__text {
    grid-area: text;
    align-self: center;
    justify-self: start;
    text-align: left;
  }
  .feature__text br {
    display: none;
  }
}
</style>
