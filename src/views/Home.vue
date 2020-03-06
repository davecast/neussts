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
    <DcSection class="back--white" backgroundImage="exp_back.png" attached>
      <div class="container">
        <Title title="experiences" color="2D2D2D" />
        <div class="grid grid--4--12 grid__3 grid__gap--35 mb--x3">
          <div class="feature">
            <figure class="feature__img">
              <img src="@/assets/exp_1.png" />
            </figure>
            <h3 class="feature__text text--center text--yellow">
              CONSULTING <br />MANAGER
            </h3>
          </div>
          <div class="feature">
            <figure class="feature__img">
              <img src="@/assets/exp_2.png" />
            </figure>
            <h3 class="feature__text text--center text--yellow">
              PROCUREMENT <br />SERVICES
            </h3>
          </div>
          <div class="feature">
            <figure class="feature__img">
              <img src="@/assets/exp_3.png" />
            </figure>
            <h3 class="feature__text text--center text--yellow">
              REPRESENTATIONS &amp; <br />PROMOTIONS
            </h3>
          </div>
        </div>
        <NeButton routeLink="/experience" color="2d2d2d" background="EFDC30">
          what we do for
        </NeButton>
      </div>
    </DcSection>
    <DcSection
      class="back--yellow"
      backgroundImage="about__back.png"
      backgroundPosition="bottom"
    >
      <div class="container">
        <p
          class="text--normal text--white mb--x3 text--center content--768--center"
        >
          We offer solutions to the problems your company faces in the
          Operations, Production, Maintenance and Acquisitions processes.
        </p>
        <p class="text--big text--white mb--x3 text--center">
          Making efficient and effective decisions for your business.
        </p>
        <NeButton routeLink="/about">
          more about us
        </NeButton>
      </div>
    </DcSection>
    <DcSection class="back--black" backgroundImage="products__back.jpg">
      <div class="container">
        <Title title="products brands" color="FFFFFF" />
        <p
          class="text--normal text--white mb--x3 text--center content--768--center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          itaque nulla recusandae at quod architecto autem tempore possimus
          tempora.
        </p>
        <NeButton routeLink="/products" color="2d2d2d" background="EFDC30">
          our products
        </NeButton>
      </div>
    </DcSection>
    <DcSection
      backgroundImage="exp_back.png"
      attached
      :pdTop="false"
      :pdBottom="false"
    >
      <div class="container container__full">
        <div class="grid grid__1--1">
          <div class="grid__item--pd pd__left--col">
            <Title title="contact us" color="2D2D2D" position="left" />
          </div>
          <div
            class="back--yellow grid__item--pd contact__section--cover pd__right--col"
          ></div>
        </div>
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
.contact__section--cover {
  background-image: url("~@/assets/contact__back.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
