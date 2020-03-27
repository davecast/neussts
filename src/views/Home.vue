<template>
  <div class="home">
    <Banner
      class="text--center"
      :image-array="['banner.jpg', 'slide2.jpg', 'slide3.jpg']"
      :delay-move="5000"
    >
      <h1
        class="banner__title--big text--center text--white text--muli text--extrabold mb--x2"
      >
        CONSULTING MANAGEMENT AND PROCUREMENT SERVICES FOR OIL AND GAS INDUSTRY
      </h1>
      <p class="text--grey--d text--big">Offering solutions, our passion</p>
    </Banner>
    <DcSection class="back--white" backgroundImage="exp_back.png" attached>
      <div class="container text--center">
        <Title title="our solutions" color="2D2D2D" />
        <div
          class="grid grid--4--12 grid__3 grid__gap--35 mb--x3 mt--x3--lg features"
        >
          <Feature image="exp_1.png" link="/solutions#consulting">
            CONSULTING <br />MANAGEMENT SERVICE</Feature
          >
          <Feature image="exp_2.png" link="/solutions#supply">
            SUPLY AND <br />PROCUREMENT SERVICES
          </Feature>
          <Feature image="exp_3.png" link="/solutions#operations">
            OPERATION AND <br />
            MAINTENANCE SERVICES
          </Feature>
        </div>
        <!--<NeButton routeLink="/experience" color="2d2d2d" background="EFDC30">
          what we do for
        </NeButton>-->
      </div>
    </DcSection>
    <DcSection
      class="back--yellow section--lg text--center"
      backgroundImage="about__back.png"
      backgroundPosition="bottom"
    >
      <div class="container">
        <p
          class="text--normal text--white mb--x3 text--center content--768--center content--595--center-lg"
        >
          We offer the highest quality of services and products through simple
          processes, and effective communication, and promote products and
          services in emerging markets.
        </p>
        <p class="text--big text--white mb--x3 text--center">
          Making efficient and effective decisions for your business.
        </p>
        <NeButton routeLink="/company">
          more about us
        </NeButton>
      </div>
    </DcSection>
    <DcSection
      class="back--black section--lg text--center"
      backgroundImage="products__back.jpg"
    >
      <div class="container">
        <Title title="products" color="FFFFFF" />
        <p
          class="text--normal text--white mb--x3 text--center content--768--center content--595--center-lg"
        >
          All our products are manufactured under the highest international
          standards. This allows us to guarantee products that are reliable,
          safe and in harmony with the environment
        </p>
        <Slider
          class="mb--x3"
          :pictures="[
            '/headstage/ansi.png',
            '/headstage/apiq.png',
            '/headstage/astm.png',
            '/headstage/ce.png',
            '/headstage/icc.png',
            '/headstage/iec.png',
            '/headstage/iqnet.png',
            '/headstage/isa.png',
            '/headstage/iso9001.png',
            '/headstage/iso14001.png',
            '/headstage/iso18001.png',
            '/headstage/nace.png',
            '/headstage/nec.png',
            '/headstage/nema.png',
            '/headstage/nfc.png',
            '/headstage/saul.png'
          ]"
        />
        <NeButton routeLink="/products" color="2d2d2d" background="EFDC30">
          our products
        </NeButton>
      </div>
    </DcSection>
    <DcSection
      class="contact__home"
      backgroundImage="exp_back.png"
      attached
      pd="0px"
    >
      <div class="container__full">
        <div class="grid grid__1--1">
          <div class="grid__item--pd pd__left--col contact__block">
            <Title title="contact" color="2D2D2D" position="left" />
            <ul class="contact__information">
              <li class="text--grey--a contact__information--size mb--x2">
                <header class="contact__information--header  mb--x2">
                  <h4 class="text--uppercase">neuss newsletter</h4>
                </header>
                <p class="contact__information--text text__content--small ">
                  <Formnews />
                </p>
              </li>
              <li class="text--grey--a contact__information--size">
                <header class="contact__information--header">
                  <i class="wz-icon wz-envelope"></i>
                  <h4 class="text--uppercase">email</h4>
                </header>
                <p class="contact__information--text text__content--small ">
                  info@neuss-ts.com
                </p>
              </li>
            </ul>
          </div>
          <div
            class="back--yellow grid__item--pd content--cover contact--cover pd__right--col content--rigth--pd"
          >
            <h2 class="title__section text--white mb--x3">
              HAVE A QUESTION OR A SPECIAL REQUEST?
            </h2>
            <p class="text--normal text--white text__content--small  mb--x3">
              We are ready to help you. In fact, we promise to get back to you
              in less than 12 hours.
            </p>
            <NeButton routeLink="/contact" align="left">
              contact us for a quote
            </NeButton>
          </div>
        </div>
      </div>
    </DcSection>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import NeButton from "@/components/Button.vue";
import Title from "@/components/NeTitle.vue";
import Feature from "@/components/Feature.vue";
import Slider from "@/components/Slider.vue";
import Formnews from "@/components/FormNewsletter.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  metaInfo: {
    title: "Neuss Technical Services",
    titleTemplate: null,
    meta: [
      {
        name: "description",
        hid: "description",
        content:
          "Neuss Technical Services (NTS) is a company that relies on highly experienced professionals, with a global vision to assist the energy industry."
      },
      // Open Graph
      { name: "og:title", content: "Neuss Technical Services" },
      {
        name: "og:description",
        content:
          "Neuss Technical Services (NTS) is a company that relies on highly experienced professionals, with a global vision to assist the energy industry."
      },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://www.neuss-ts.com/" },
      { name: "og:image", content: "https://davecastworks.com/meta_640.jpg" },
      // Twitter Card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@neussts" },
      { name: "twitter:title", content: "Neuss Technical Services" },
      {
        name: "twitter:description",
        content:
          "Neuss Technical Services (NTS) is a company that relies on highly experienced professionals, with a global vision to assist the energy industry."
      },
      {
        name: "twitter:image",
        content: "https://davecastworks.com/meta_640.jpg"
      },
      { name: "twitter:image:alt", content: "NeussTS Logo" }
    ]
  },
  name: "Home",
  components: {
    Banner,
    NeButton,
    DcSection,
    Title,
    Feature,
    Slider,
    Formnews
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.contact--cover {
  background-image: url("~@/assets/contact__back.jpg");
}
.contact__information--header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact__information--header i {
  font-size: 16px;
  line-height: 20px;
  margin-right: 5px;
  width: 20px;
  text-align: center;
}
.contact__information--size {
  font-size: 18px;
  line-height: 18px;
}
.contact__information--text {
  padding-left: 25px;
  line-height: 24px;
}

@media screen and (max-width: 980px) {
  .grid--4--12 {
    max-width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .grid__3 {
    grid-template: 1fr / repeat(12, 1fr);
    grid-gap: 20px 10px;
    grid-template-areas:
      "feature3 feature3 feature3 feature3 feature3 feature3 feature2 feature2 feature2 feature2 feature2 feature2"
      ". . . feature1 feature1 feature1 feature1 feature1 feature1 . . .";
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
  .grid__1--1 {
    grid-template: 1fr / 1fr;
  }
  .contact--cover {
    text-align: center;
  }
  .contact--cover .text__content--small {
    margin: 0 auto 15px;
  }
  .contact--cover .btn {
    margin: 0 auto !important;
  }
  .contact__block .title {
    text-align: center !important;
  }
  .contact__block .title.title__left::before {
    right: 0 !important;
  }
  .contact__block .contact__information--size {
    text-align: center;
  }
  .contact__block .contact__information--header {
    display: inline-flex;
  }
  .contact__block .contact__information--text {
    padding: 0;
  }
}

@media screen and (max-width: 595px) {
  .grid__3 {
    grid-template-areas:
      "feature1 feature1 feature1 feature1 feature1 feature1 feature1 feature1 feature1 feature1 feature1 feature1"
      "feature2 feature2 feature2 feature2 feature2 feature2 feature2 feature2 feature2 feature2 feature2 feature2"
      "feature3 feature3 feature3 feature3 feature3 feature3 feature3 feature3 feature3 feature3 feature3 feature3";
  }
  .section.contact__home {
    padding: 0 !important;
  }
}
</style>
