<template>
  <div>
    <Banner type="small" img="partners-banner.jpg">
      <h2
        class="banner__title--medium banner__title--separator text--white text--muli text--extrabold mb--x3"
      >
        PRODUCTS
      </h2>
      <p class="banner__title--text text--white text--normal m--none">
        In order to provide our customers with the best and most advanced
        technological solutions, we are in continuous development of alliances
        and representations of the best manufacturing companies for the oil and
        gas industry.
      </p>
    </Banner>
    <DcSection class="back--grey--d">
      <div class="container">
        <Title title="products" color="2d2d2d" position="center" />
        <div class="grid grid__col--4 grid__gap--35">
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
          <Product
            image="products/pro__1.jpg"
            title="Here can put the name for product"
          >
            We focus relentlessly on the customer. We provide flexible,
            practical and value added solutions. We deliver results by
            constantly taking the initiative.
          </Product>
        </div>
      </div>
    </DcSection>
    <DcSection class="back--grey--c brands">
      <div class="container">
        <div class="grid grid__gap--35 grid__1--3 ">
          <div class="grid__item grid__item--center-v">
            <Title
              title="BRANDS"
              subtitle="OUR WORK WITH BEST"
              color="2d2d2d"
              position="left"
              margin="0px"
            />
          </div>
          <div class="grid__item">
            <div class="grid grid grid__col--5 grid__gap--35 ">
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
              <ImageContent source="products/brand.png" />
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
import CallAction from "@/components/CallAction.vue";
import NeButton from "@/components/Button.vue";
import Product from "@/components/Product.vue";
import ImageContent from "@/components/ImageContent.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Products",
  components: {
    Banner,
    DcSection,
    Title,
    CallAction,
    NeButton,
    Product,
    ImageContent
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
@media screen and (max-width: 980px) {
  .grid__col--4 {
    grid-template: 1fr / repeat(3, 1fr);
    margin-top: 30px;
  }
  .grid__col--5 {
    grid-template: 1fr / repeat(4, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .grid__col--4 {
    grid-template: 1fr / repeat(2, 1fr);
  }
  .grid__col--5 {
    grid-template: 1fr / repeat(3, 1fr);
    grid-gap: 20px 10px;
  }
  .grid__1--3 {
    grid-template: 1fr / 1.5fr 3.5fr;
  }
}
@media screen and (max-width: 595px) {
  .grid__col--5[data-v-7177119e] {
    grid-template: 1fr / repeat(2, 1fr);
    grid-gap: 20px 10px;
  }
  .grid__col--4 {
    grid-template: 1fr / repeat(1, 1fr);
  }
  .grid__1--3 {
    grid-template: 1fr / 1fr;
    grid-gap: 10px;
  }
}
</style>
