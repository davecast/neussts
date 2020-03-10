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
    <DcSection class="back--white" backgroundImage="exp_back.png" attached>
      <div class="container">
        <p class="text--big text--grey--a mb--x3 text--center">
          We make efficient and effective decisions for your business.
        </p>
        <p class="text--normal text--grey--a text--center content--768--center">
          Offering solutions to the problems facing your company in the
          Operations, Production, Maintenance and Acquisitions processes.
        </p>
      </div>
    </DcSection>
    <DcSection class="back--white">
      <div class="container">
        <div class="grid grid_5_4_">
          <div class="contact__form">
            <h2 class="contact__form--title text--yellow  mb--x1">
              AT NEUSS TECNICAL SERVICES
            </h2>
            <p class="contact__form--text text--normal text--grey--c mb--x2">
              We will be pleased to answer any questions.
            </p>
            <DcForm />
          </div>
          <div class="contact__info">b</div>
        </div>
      </div>
    </DcSection>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import DcForm from "@/components/Form.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Experience",
  components: {
    Banner,
    DcSection,
    DcForm
  },
  data() {
    return {};
  },
  mounted() {
    //window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.grid_5_4_ {
  grid-template: 1fr / repeat(12, 1fr);
  grid-template-areas: ". form form form form form . info info info info .";
}
.contact__form {
  grid-area: form;
}
.contact__info {
  grid-area: info;
}
.contact__form--title {
  font-size: 28px;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: 900;
}
</style>
