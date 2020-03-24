<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Muli:700,800|Open+Sans:400,700&display=swap");

@font-face {
  font-family: "webzuliapack";
  src: url("~@/assets/webfonts/webzuliapack.eot");
  src: url("~@/assets/webfonts/webzuliapack.eot") format("embedded-opentype"),
    url("~@/assets/webfonts/webzuliapack.ttf") format("truetype"),
    url("~@/assets/webfonts/webzuliapack.woff") format("woff"),
    url("~@/assets/webfonts/webzuliapack.svg") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

i.wz-icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "webzuliapack" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wz-linkedin-brands:before {
  content: "\e912";
}
.wz-facebook-square-brands:before {
  content: "\e913";
}
.wz-id-card:before {
  content: "\e911";
}
.wz-check-double:before {
  content: "\e910";
}
.wz-twitter-brands:before {
  content: "\e90f";
}
.wz-facebook:before {
  content: "\e901";
}
.wz-whatsapp:before {
  content: "\e90e";
}
.wz-instagram:before {
  content: "\e900";
}
.wz-closed:before {
  content: "\e90d";
}
.wz-calendar:before {
  content: "\e90c";
}
.wz-envelope:before {
  content: "\e902";
}
.wz-phone:before {
  content: "\e903";
}
.wz-point:before {
  content: "\e904";
}
.wz-arrow-left:before {
  content: "\e905";
}
.wz-video:before {
  content: "\e906";
}
.wz-search:before {
  content: "\e907";
}
.wz-image:before {
  content: "\e908";
}
.wz-bar:before {
  content: "\e909";
}
.wz-arrow-right:before {
  content: "\e90a";
}
.wz-add:before {
  content: "\e90b";
}

body {
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
figure {
  margin: 0;
  padding: 0;
  font-size: 0;
}
a {
  text-decoration: none;
  font-family: "Muli", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: "Muli", sans-serif;
}

p {
  margin: 0;
}
/*Tools*/
.back--white {
  background-color: #fff;
}
.back--black {
  background-color: #2d2d2d;
}
.back--yellow {
  background-color: #efdc30;
}
.back--grey--a {
  background-color: #999999;
}
.back--grey--c {
  background-color: #f2f2f2;
}
.back--grey--b {
  background-color: #4c4c4c;
}

.grid {
  display: grid;
}
.grid__item--pd {
  padding: 70px 0px;
}
.grid__item--center-v {
  align-self: center;
}
.grid--4--12 {
  max-width: calc(100% - 33.33%);
  margin: 0 auto;
}
.grid--2--12 {
  max-width: calc(100% - 16.67%);
  margin: 0 auto;
}
.grid__1--1 {
  grid-template: 1fr / 1fr 1fr;
}
.grid__3 {
  grid-template: 1fr / 1fr 1fr 1fr;
}
.grid__2--2--1 {
  grid-template: 1fr / 2fr 2fr 1fr;
}
.grid__1--3 {
  grid-template: 1fr / 1fr 3fr;
}
.grid__col--4 {
  grid-template: 1fr / repeat(4, 1fr);
}
.grid__col--5 {
  grid-template: 1fr / repeat(5, 1fr);
}
.grid__col--6 {
  grid-template: 1fr / repeat(6, 1fr);
}
.grid__gap--35 {
  grid-gap: 35px;
}
.pd__left--col {
  padding-left: calc(100% - calc(1200px / 2));
}
.pd__right--col {
  padding-right: calc(100% - calc(1200px / 2));
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.container__full {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}
.content--768--center {
  max-width: 768px;
  margin: 0 auto;
}
.content--cover {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content--rigth--pd {
  padding-left: 80px;
}
.content--left--pd {
  padding-right: 80px;
}
.title__section {
  font-size: 26px;
  line-height: 32px;
  text-transform: uppercase;
  max-width: 470px;
}

.text--center {
  text-align: center;
}
.text--right {
  text-align: right;
}
.text--left {
  text-align: left;
}
.text--white {
  color: #fff;
}
.text--black {
  color: #2d2d2d;
}
.text--yellow {
  color: #efdc30;
}
.text--grey--a {
  color: #999999;
}
.text--grey--b {
  color: #4c4c4c;
}
.text--grey--c {
  color: #aaaaaa;
}
.text--grey--d {
  color: #eaeaea;
}
.text--muli {
  font-family: "Muli", sans-serif;
}
.text--uppercase {
  text-transform: uppercase;
}
.text--extrabold {
  font-weight: 900;
}
.text--small {
  font-size: 14px;
  line-height: 26px;
}
.text--normal {
  font-size: 18px;
  line-height: 31px;
}
.text--big {
  font-size: 24px;
  line-height: 37px;
}
.text__content--small {
  max-width: 300px;
}
.text__content--normal {
  max-width: 450px;
}

.mt--x1 {
  margin-top: 10px;
}
.mt--x2 {
  margin-top: 20px;
}
.mt--x3 {
  margin-top: 30px;
}
.mb--x1 {
  margin-bottom: 10px;
}
.mb--x2 {
  margin-bottom: 20px;
}
.mb--x3 {
  margin-bottom: 30px;
}
.mb--x4 {
  margin-bottom: 40px;
}
.mb--x7 {
  margin-bottom: 70px;
}
.m--none {
  margin: 0px;
}

.order--1 {
  order: 1;
}
.order--2 {
  order: 2;
}
.order--3 {
  order: 3;
}

.list {
  font-size: 14px;
  line-height: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
}
.list i {
  margin-right: 5px;
}
.list--line-height p {
  line-height: 24px;
  margin-top: -4px;
}
.list--right {
  text-align: right;
  justify-content: flex-end;
}

@media screen and (max-width: 1200px) {
  .container {
    max-width: 980px;
  }
  .pd__left--col {
    padding-left: calc(100% - calc(980px / 2));
  }
  .pd__right--col {
    padding-right: calc(100% - calc(980px / 2));
  }
}
@media screen and (max-width: 980px) {
  .container {
    max-width: 740px;
  }
  .pd__left--col {
    padding-left: calc(100% - calc(740px / 2));
  }
  .pd__right--col {
    padding-right: calc(100% - calc(740px / 2));
  }

  .content--595--center-lg {
    max-width: 595px;
  }

  .grid--2--12 {
    max-width: calc(100%);
  }

  .title__section {
    font-size: 20px;
    line-height: 26px;
  }
  .text--big {
    font-size: 22px;
    line-height: 35px;
  }

  .mt--x3--lg {
    margin-top: 30px;
  }

  .section--lg {
    padding: 50px 0 !important;
  }
  .content--rigth--pd {
    padding-left: 20px;
  }
  .content--left--pd {
    padding-right: 20px;
  }
}
@media screen and (max-width: 768px) {
  .order--1--tb {
    order: 1;
  }
  .order--2--tb {
    order: 2;
  }
  .order--3--tb {
    order: 3;
  }
  .container {
    max-width: 565px;
  }
  .pd__left--col {
    padding-left: 0;
    margin: 0 auto;
    max-width: 565px;
  }
  .pd__right--col {
    padding-right: 0;
  }
  .content--rigth--pd {
    padding-left: 0px;
  }
  .content--left--pd {
    padding-right: 0px;
  }
  .grid__item--pd {
    padding: 35px 0px;
  }

  .text--left--tb {
    text-align: left;
  }

  .title__section {
    margin: 0 auto 15px;
  }

  .pdt--x1--tb {
    padding-top: 10px;
  }

  .mb--x0--tb {
    margin-bottom: 0px;
  }
}
@media screen and (max-width: 595px) {
  .container,
  .title__section {
    max-width: 320px;
  }
  .pd__left--col {
    max-width: 300px;
  }
  .section {
    padding: 45px 0px !important;
  }
  .section.footer--bottom {
    padding: 0px !important;
  }
}
@media screen and (max-width: 380px) {
  .container,
  .title__section {
    max-width: 300px;
  }
  .text--normal {
    font-size: 14px;
    line-height: 26px;
  }
}
</style>
