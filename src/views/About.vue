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
    <DcSection>
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
          <div class="grid__item grid__item--center-v content--left--pd">
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
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Title from "@/components/NeTitle.vue";
import ImageContent from "@/components/ImageContent.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Home",
  components: {
    Banner,
    DcSection,
    Title,
    ImageContent
  }
};
</script>

<style scoped></style>
