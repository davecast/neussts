<template>
  <figure>
    <img :src="require(`@/assets/${this.source}`)" :alt="this.altText" />
  </figure>
</template>

<script>
export default {
  name: "ImageContent",
  props: {
    source: {
      type: String
    },
    altText: {
      type: String
    }
  }
};
</script>

<style scoped>
figure {
  max-width: 100%;
}
img {
  max-width: 100%;
}
@media screen and (max-width: 768px) {
  figure {
    overflow: hidden;
    height: 300px;
  }
  img {
    object-fit: cover;
    object-position: center;
    height: 300px;
    width: 100%;
  }
  .brands figure {
    height: auto;
  }
  .brands figure img {
    height: auto;
  }
}
</style>
