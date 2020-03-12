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
          <div class="contact__info">
            <Title
              title="CONTACT INFORMATION"
              color="2d2d2d"
              position="left"
              :twoLines="true"
            />
            <ul class="info">
              <li>
                <i class="wz-icon wz-envelope"></i>
                info@neuss-ts.com
              </li>
            </ul>
            <ContactWorld
              name="canada"
              flag="canada.png"
              address="37 Estelle-MAuffette Notre Dame De L'Ile-Perrot (QC) J7V 9R8"
              rif="883844774783"
            />
            <ContactWorld
              name="peru"
              flag="peru.png"
              address="440 Los Castallos, San Isidro Lima - 25"
              rif="883844774783"
            />
            <ContactWorld
              name="colombia"
              flag="colombia.png"
              address="Calle 7B, Edif. Altos de Bella Suiza Bella Suiza - Bogota"
              rif="883844774783"
            />
            <ContactWorld
              name="venezuela"
              flag="venezuela.png"
              address="Centro Empresarial Colon, Piso 2 Lecherias"
              rif="883844774783"
            />
          </div>
        </div>
      </div>
    </DcSection>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import DcForm from "@/components/Form.vue";
import Title from "@/components/NeTitle.vue";
import ContactWorld from "@/components/ContactWorld.vue";

import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Experience",
  components: {
    Banner,
    DcSection,
    DcForm,
    Title,
    ContactWorld
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
  line-height: 32px;
  text-transform: uppercase;
  font-weight: 900;
}
.info {
  margin-bottom: 30px;
}
.info ul {
}
.info li {
  color: #aaaaaa;
  font-size: 16px;
  line-height: 20px;
  display: grid;
  grid-template: 1fr / 25px 1fr;
}
.info i {
  margin-top: 2px;
}

@media screen and (max-width: 980px) {
  .grid_5_4_[data-v-df212a54] {
    grid-template-areas: "form form form form form form form . info info info info";
  }
}
</style>
