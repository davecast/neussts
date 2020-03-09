<template>
  <DcSection
    class="back--yellow"
    backgroundImage="about/call__contact.png"
    pd="0px"
  >
    <div class="container container__full">
      <div class="grid grid__1--1">
        <div class="grid__item--pd pd__left--col">
          <h2 class="title__section text--white mb--x3">
            HAVE A QUESTIONS OR HAVE A SPECIAL REQUEST?
          </h2>
          <p class="text--normal text--white text__content--small  mb--x3">
            We are ready to help you. In fact, we promise to get back to you in
            less than 12 hours.
          </p>
          <NeButton routeLink="/contact" align="left">
            contact us for a quote
          </NeButton>
        </div>
      </div>
    </div>
  </DcSection>
</template>

<script>
import NeButton from "@/components/Button.vue";

import DcSection from "@/layouts/DcSection";

export default {
  name: "CallContact",
  components: {
    DcSection,
    NeButton
  }
};
</script>

<style scoped></style>
