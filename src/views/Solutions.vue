<template>
  <div>
    <Banner type="small" img="solutions-banner.jpg">
      <h2
        class="banner__title--medium banner__title--separator text--white text--muli text--extrabold mb--x3"
      >
        SOLITIONS
      </h2>
      <p class="banner__title--text text--white text--normal m--none">
        We offer solutions to solve problems in the processes of Operations,
        Production, Maintenance and Acquisitions that may have in your company.
      </p>
    </Banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Solutions",
  components: {
    Banner
  }
};
</script>

<style scoped></style>
