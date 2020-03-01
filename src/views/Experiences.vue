<template>
  <div>
    <Banner type="small" img="experience-banner.png">
      <h2
        class="banner__title--medium banner__title--separator text--white text--muli text--extrabold mb--x3"
      >
        EXPERIENCE
      </h2>
      <p class="banner__title--text text--white text--normal m--none">
        We are formed by professionals from the energy sector, in the gas, oil
        and energy generation industries, with more than 20 years.
      </p>
    </Banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Experience",
  components: {
    Banner
  }
};
</script>

<style scoped></style>
