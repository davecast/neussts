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
    <DcSection class="back--grey--c">
      <div class="container">
        <div class="grid grid__1--1 grid--2--12 grid__gap--35 mb--x7">
          <div class="grid__item">
            <ImageContent source="solutions/sol_1.jpg" />
          </div>
          <div class="grid__item grid__item--center-v content--rigth--pd">
            <Title title="CONSULTING MANAGER" color="2d2d2d" position="left" />
            <p
              class="solutions__paragraph solutions__paragraph--separator text--grey--c"
            >
              We apply the best practice to help organizations to improve their
              performance, operating primarily through the analysis of existing
              problems and the development of plans for improvement.
            </p>
            <p
              class="solutions__paragraph solutions__paragraph--separator text--grey--c"
            >
              The experience of our people, as well as their exposure to
              different problems and relationships with numerous organizations
              around the world, make our company be aware of, and utilize the
              "best practices“ in the oil and gas industry.
            </p>
            <p class="solutions__paragraph text--grey--c">
              NEUSS-TS provide services in: the management of organizational
              change, development plan, production process analysis, technology
              implementation, strategy development, operational improvement
              services, maintenance plan, project feasibility among others
            </p>
          </div>
        </div>
      </div>
    </DcSection>
    <DcSection class="back--grey--c">
      <div class="container">
        <div class="grid grid__1--1 grid--2--12 grid__gap--35 mb--x7">
          <div class="grid__item">
            <ImageContent source="solutions/sol_2.jpg" />
          </div>
          <div class="grid__item grid__item--center-v content--rigth--pd">
            <Title title="PROCUREMENT SERVICE" color="2d2d2d" position="left" />
            <p
              class="solutions__paragraph solutions__paragraph--separator text--grey--c"
            >
              We support the procurement department by revealing the information
              they need to improve their purchasing decisions. Instead of just
              pursuing what is already known, we delve deeply and with more
              detail.
            </p>
            <p
              class="solutions__paragraph solutions__paragraph--separator text--grey--c"
            >
              Combining the different aspects of the procurement process into
              one seamless whole that transcends the sum of its parts. Combining
              technology and people, we don´t impose answers on the user, we
              synchronise information so that users can improve their own
              decision making. We help to improve these procurement decisions by
              making them quicker and more obvious.
            </p>
          </div>
        </div>
        <div class="grid grid__1--1 grid--2--12 grid__gap--35">
          <div class="grid__item grid__item--center-v content--left--pd">
            <Title title="REPRESENTATIONS" color="2d2d2d" position="right" />
            <p
              class="solutions__paragraph solutions__paragraph--separator text--grey--c text--right"
            >
              We help Canadian, American, European and Asian manufacturing
              companies that wish to expand their business to the Latin American
              market, through our offices in Venezuela, Colombia and Peru.
              Guaranteeing a quality product for our customers and developing
              long term relationships and growth for our suppliers.
            </p>
          </div>
          <div class="grid__item">
            <ImageContent source="solutions/sol_3.jpg" />
          </div>
        </div>
      </div>
    </DcSection>
    <CallContact />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Title from "@/components/NeTitle.vue";
import ImageContent from "@/components/ImageContent.vue";
import CallContact from "@/components/CallContact.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Solutions",
  components: {
    Banner,
    Title,
    ImageContent,
    DcSection,
    CallContact
  }
};
</script>

<style scoped>
.solutions__paragraph {
  font-size: 16px;
  line-height: 26px;
}
.solutions__paragraph--separator {
  margin-bottom: 15px;
}
</style>
