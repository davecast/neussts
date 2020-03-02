<template>
  <div>
    <Banner type="small" img="contact-banner.jpg">
      <h2
        class="banner__title--medium banner__title--separator text--white text--muli text--extrabold mb--x3"
      >
        CONTACT
      </h2>
      <p class="banner__title--text text--white text--normal m--none">
        Write us to know how to help you with your current or future projects,
        and we will get in touch to talk a little.
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
