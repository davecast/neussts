<template>
  <div class="about">
    <Banner type="small" img="about-banner.jpg">
      <h2
        class="banner__title--medium banner__title--separator text--white text--muli text--extrabold mb--x3"
      >
        ABOUT US
      </h2>
      <p class="banner__title--text text--white text--normal m--none">
        We offer solutions to the problems your company faces in the Operations,
        Production, Maintenance and Acquisitions processes.
      </p>
    </Banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner
  }
};
</script>

<style scoped></style>
