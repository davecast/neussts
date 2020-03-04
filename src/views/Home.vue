<template>
  <div class="home">
    <Banner type="big" img="banner.jpg">
      <h1
        class="banner__title--big text--center text--white text--muli text--extrabold mb--x4"
      >
        CONSULTING MANAGER AND PROCUREMENT SERVICES FOR OIL AND GAS INDUSTRY
      </h1>
      <NeButton routeLink="/solutions" color="2d2d2d" background="EFDC30">
        our solutions
      </NeButton>
    </Banner>
    <DcSection backgroundImage="exp_back.png" attached>
      <div class="container">
        <Title title="experiences" color="2D2D2D" />
        <NeButton routeLink="/experience" color="2d2d2d" background="EFDC30">
          what we do for
        </NeButton>
      </div>
    </DcSection>
    <DcSection backgroundImage="about__back.png">
      <div class="container">
        about us
        <NeButton routeLink="/about">
          more about us
        </NeButton>
      </div>
    </DcSection>
    <DcSection backgroundImage="products__back.jpg">
      <div class="container">
        <Title title="products brands" color="FFFFFF" />
        <NeButton routeLink="/products" color="2d2d2d" background="EFDC30">
          our products
        </NeButton>
      </div>
    </DcSection>
    <DcSection attached>
      <div class="container">
        <Title title="contact us" color="2D2D2D" position="left" />
      </div>
    </DcSection>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import NeButton from "@/components/Button.vue";
import Title from "@/components/NeTitle.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Home",
  components: {
    Banner,
    NeButton,
    DcSection,
    Title
  }
};
</script>

<style scoped></style>
