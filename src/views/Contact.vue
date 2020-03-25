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
            <h2
              class="contact__form--title text--yellow  mb--x1 text--cebter--tb"
            >
              ENTER YOUR REQUEST.
            </h2>
            <p
              class="contact__form--text text--normal text--grey--c mb--x2 text--cebter--tb"
            >
              We will be pleased to answer any questions.
            </p>
            <DcForm />
          </div>
          <div class="contact__info">
            <h2
              class="contact__form--title text--black  mb--x1 text--cebter--tb"
            >
              WHERE WE ARE
            </h2>
            <p
              class="contact__form--text text--normal text--grey--c mb--x2 text--cebter--tb"
            >
              Contact us we waiting for your.
            </p>
            <div class="map">
              <figure class="map__image">
                <img src="@/assets/mapa__americas.png" alt="Where we are" />
              </figure>
              <figure class="map__country map__venezuela">
                <img src="@/assets/mapa__venezuela.png" />
              </figure>
              <figure class="map__country map__canada">
                <img src="@/assets/mapa__canada.png" />
              </figure>
              <figure class="map__country map__colombia">
                <img src="@/assets/mapa__colombia.png" />
              </figure>
              <figure class="map__country map__peru">
                <img src="@/assets/mapa__peru.png" />
              </figure>
              <figure class="map__flag flag__venezuela">
                <img src="@/assets/venezuela.png" />
              </figure>
              <figure class="map__flag flag__canada">
                <img src="@/assets/canada.png" />
              </figure>
              <figure class="map__flag flag__colombia">
                <img src="@/assets/colombia.png" />
              </figure>
              <figure class="map__flag flag__peru">
                <img src="@/assets/peru.png" />
              </figure>
            </div>
            <!--<ul class="info">
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
            />-->
          </div>
        </div>
      </div>
    </DcSection>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import DcForm from "@/components/Form.vue";
//import Title from "@/components/NeTitle.vue";
//import ContactWorld from "@/components/ContactWorld.vue";

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
    window.scrollTo(0, 0);
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
.map {
  width: 400px;
  position: relative;
}
.map__image {
  max-width: 100%;
}
.map__image img {
  width: 100%;
}
.map__country {
  position: absolute;
}
.map__country img {
  max-width: 100%;
}
.map__venezuela {
  width: 46.56px;
  top: 287px;
  right: 117px;
}
.map__canada {
  width: 263.67px;
  top: 26px;
  left: 109px;
}
.map__peru {
  width: 46.56px;
  bottom: 166px;
  left: 207.5px;
}
.map__colombia {
  width: 43.76px;
  bottom: 219px;
  left: 216px;
}
.map__flag {
  position: absolute;
  width: 25px;
}
.map__flag img {
  max-width: 100%;
}
.flag__canada {
  top: 100px;
  left: 180px;
}
.flag__colombia {
  bottom: 240px;
  right: 150px;
}
.flag__peru {
  bottom: 190px;
  right: 156px;
}
.flag__venezuela {
  bottom: 255px;
  right: 124px;
}
@media screen and (max-width: 980px) {
  .grid_5_4_ {
    grid-template-areas: "form form form form form form form . info info info info";
  }
}
@media screen and (max-width: 768px) {
  .grid_5_4_ {
    grid-template-areas:
      "info info info info info info info info info info info info"
      "form form form form form form form form form form form form";
  }
  .map {
    margin: 0 auto;
  }
}
@media screen and (max-width: 595px) {
  .contact__form--title {
    font-size: 22px;
    line-height: 22px;
  }
}
@media screen and (max-width: 380px) {
  .map {
    width: 300px;
  }
  .map__venezuela {
    width: 34.93px;
    top: 215px;
    right: 88px;
  }
  .map__canada {
    width: 197.78px;
    top: 20px;
    left: 80px;
  }
  .map__colombia {
    width: 32.82px;
    bottom: 165px;
    left: 160px;
  }
  .map__peru {
    width: 34.93px;
    bottom: 124px;
    left: 155.5px;
  }
  .map__flag {
    width: 20px;
  }
  .flag__venezuela {
    bottom: 192px;
    right: 94px;
  }
  .flag__canada {
    top: 75px;
    left: 140px;
  }
  .flag__colombia {
    bottom: 180px;
    right: 115px;
  }
  .flag__peru {
    bottom: 145px;
    right: 120px;
  }
}
</style>
