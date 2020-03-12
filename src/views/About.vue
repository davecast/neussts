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
    <DcSection class="back--grey--c">
      <div class="container">
        <div class="grid grid__1--1 grid--2--12 grid__gap--35 mb--x7">
          <div class="grid__item">
            <ImageContent source="about/mision.jpg" />
          </div>
          <div class="grid__item grid__item--center-v content--rigth--pd">
            <Title title="mision" color="2d2d2d" position="left" />
            <p class="text--normal text--grey--c">
              We are in continuous development of alliances and representations
              of the best manufacturing companies.
            </p>
          </div>
        </div>
        <div class="grid grid__1--1 grid--2--12 grid__gap--35">
          <div
            class="grid__item grid__item--center-v content--left--pd order--2"
          >
            <Title title="vision" color="2d2d2d" position="right" />
            <p class="text--normal text--grey--c text--right">
              To be recognized by our clients as an ally to solve their
              technical operational problems and global procurement problems.
            </p>
          </div>
          <div class="grid__item">
            <ImageContent source="about/vision.jpg" />
          </div>
        </div>
      </div>
    </DcSection>
    <DcSection class="back--white">
      <div class="container">
        <Title title="our team core" color="2d2d2d" position="center" />
        <p
          class="text--normal text--grey--c mb--x3 text--center content--768--center content--595--center-lg"
        >
          We are formed by professionals from the energy sector, in the gas, oil
          and power generation industries, with
          <strong>more than 20 years of experience</strong> in areas such as
        </p>
        <div class="grid features grid__col--6 grid__gap--35">
          <Feature image="about/maintenance.png">
            MAINTENANCE
          </Feature>
          <Feature image="about/production.png">
            PRODUCTION
          </Feature>
          <Feature image="about/engineer.png">
            ENGINEERING
          </Feature>
          <Feature image="about/procurement.png">
            PROCUREMENT
          </Feature>
          <Feature image="about/construccion.png">
            CONSTRUCTION
          </Feature>
          <Feature image="about/business.png">
            BUSINESS <br />DEVELOPMENT
          </Feature>
        </div>
      </div>
    </DcSection>
    <DcSection class="back--grey--c">
      <div class="container">
        <Title title="our valuers" color="2d2d2d" position="center" />
        <div class="grid__values">
          <div class="grid__values--item">
            <figure class="grid__values--image">
              <img src="@/assets/about/customer-service.jpg" />
            </figure>
            <div class="grid__values--content">
              <Title
                title="Customer Focus"
                color="ffffff"
                position="left"
                textTransform="Capitalize"
              />
              <p class="text--small text--grey--d">
                We focus relentlessly on the customer. We provide flexible,
                practical and value added solutions. We deliver results by
                constantly taking the initiative.
              </p>
            </div>
          </div>
          <div class="grid__values--item">
            <figure class="grid__values--image">
              <img src="@/assets/about/innovation.jpg" />
            </figure>
            <div class="grid__values--content">
              <Title
                title="Innovation"
                color="ffffff"
                position="left"
                textTransform="Capitalize"
              />
              <p class="text--small text--grey--d">
                We approach our business with creativity, fresh ideas, lateral
                thinking and a commitment to do things in a new way.
              </p>
            </div>
          </div>
          <div class="grid__values--item">
            <figure class="grid__values--image">
              <img src="@/assets/about/integrity.jpg" />
            </figure>
            <div class="grid__values--content">
              <Title
                title="Integrity"
                color="ffffff"
                position="left"
                textTransform="Capitalize"
              />
              <p class="text--small text--grey--d">
                We are dependable and responsible people committed to being
                open, transparent, honest and direct in all of our activities.
              </p>
            </div>
          </div>
          <div class="grid__values--item">
            <figure class="grid__values--image">
              <img src="@/assets/about/excellence.jpg" />
            </figure>
            <div class="grid__values--content">
              <Title
                title="Excellence"
                color="ffffff"
                position="left"
                textTransform="Capitalize"
              />
              <p class="text--small text--grey--d">
                We are dedicated to continuous improvement which is reflected in
                our leadership in best practice implementation.
              </p>
            </div>
          </div>
          <div class="grid__values--item">
            <figure class="grid__values--image">
              <img src="@/assets/about/people.jpg" />
            </figure>
            <div class="grid__values--content">
              <Title
                title="People"
                color="ffffff"
                position="left"
                textTransform="Capitalize"
              />
              <p class="text--small text--grey--d">
                We create value, are empowered to make a difference and are
                responsible and accountable for our actions. We succeed through
                teamwork based on mutual respect and the desire to invest in
                each other’s success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DcSection>
    <CallAction backgroundImage="call__contact.png" backgroundColor="#efdc30">
      <h2 class="title__section text--white mb--x3">
        HAVE A QUESTIONS OR HAVE A SPECIAL REQUEST?
      </h2>
      <p class="text--normal text--white text__content--normal  mb--x3">
        We are ready to help you. In fact, we promise to get back to you in less
        than 12 hours.
      </p>
      <NeButton routeLink="/contact" align="left">
        contact us for a quote
      </NeButton>
    </CallAction>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Title from "@/components/NeTitle.vue";
import ImageContent from "@/components/ImageContent.vue";
import Feature from "@/components/Feature.vue";
import CallAction from "@/components/CallAction.vue";
import NeButton from "@/components/Button.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Home",
  components: {
    Banner,
    DcSection,
    Title,
    ImageContent,
    Feature,
    CallAction,
    NeButton
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.grid__values {
  padding-top: 10px;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "item1 item1 item2 item2 item3 item3"
    ". item4 item4 item5 item5 .";
}
.grid__values--item {
  position: relative;
}
.grid__values--item:nth-child(1) {
  grid-area: item1;
}
.grid__values--item:nth-child(2) {
  grid-area: item2;
}
.grid__values--item:nth-child(3) {
  grid-area: item3;
}
.grid__values--item:nth-child(4) {
  grid-area: item4;
}
.grid__values--item:nth-child(5) {
  grid-area: item5;
}
.grid__values--image {
  max-width: 100%;
}
.grid__values--image img {
  max-width: 100%;
}
.grid__values--content {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 30px;
  box-sizing: border-box;
}
@media screen and (max-width: 980px) {
  .features.grid__col--6 {
    grid-template: 1fr / repeat(3, 1fr);
  }
  .grid__values[data-v-039c5b43] {
    padding-top: 25px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "item1 item1 item2 item2"
      "item3 item3 item4 item4"
      ". item5 item5 .";
  }
}
@media screen and (max-width: 768px) {
  .features.grid__col--6 {
    grid-template: 1fr / repeat(12, 1fr);
    grid-gap: 20px 10px;
    grid-template-areas:
      ". feature1 feature1 feature1 feature1 . . feature2 feature2 feature2 feature2 ."
      ". feature3 feature3 feature3 feature3 . . feature4 feature4 feature4 feature4 ."
      ". feature5 feature5 feature5 feature5 . . feature6 feature6 feature6 feature6 .";
  }
  .features .feature:nth-child(1) {
    grid-area: feature1;
  }
  .features .feature:nth-child(2) {
    grid-area: feature2;
  }
  .features .feature:nth-child(3) {
    grid-area: feature3;
  }
  .features .feature:nth-child(4) {
    grid-area: feature4;
  }
  .features .feature:nth-child(5) {
    grid-area: feature5;
  }
  .features .feature:nth-child(6) {
    grid-area: feature6;
  }
  .grid__values[data-v-039c5b43][data-v-039c5b43] {
    padding-top: 25px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "item1 item1 item1 item1"
      "item2 item2 item2 item2"
      "item3 item3 item3 item3"
      "item4 item4 item4 item4"
      "item5 item5 item5 item5";
  }
  .grid__values--image {
    overflow: hidden;
    max-height: 300px;
  }
  .grid__values--image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top;
  }
  .text--small {
    font-size: 16px;
    line-height: 28px;
  }
  .grid__1--1 {
    grid-template: 1fr / 1fr;
  }
}
</style>
