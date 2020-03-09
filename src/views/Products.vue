<template>
  <div>
    <Banner type="small" img="partners-banner.jpg">
      <h2
        class="banner__title--medium banner__title--separator text--white text--muli text--extrabold mb--x3"
      >
        PRODUCTS &amp; BRANDS
      </h2>
      <p class="banner__title--text text--white text--normal m--none">
        In order to provide our customers with the best and most advanced
        technological solutions, we are in continuous development of alliances
        and representations of the best manufacturing companies for the oil and
        gas industry.
      </p>
    </Banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Products",
  components: {
    Banner
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped></style>
