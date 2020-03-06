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
</style>
