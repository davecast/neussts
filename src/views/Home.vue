<template>
  <div class="home">
    <Banner type="big" img="banner.jpg">
      <h1
        class="banner__title--big text--center text--white text--muli text--extrabold mb--x4"
      >
        CONSULTING MANAGER AND PROCUREMENT SERVICES FOR OIL AND GAS INDUSTRY
      </h1>
      <NeButton colorType="btn--yellow" routeLink="/solutions">
        OUR SOLUTIONS
      </NeButton>
    </Banner>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import NeButton from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Banner,
    NeButton
  }
};
</script>

<style scoped></style>
