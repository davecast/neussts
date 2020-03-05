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
}

p {
  margin: 0;
}
/*Tools*/

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.content--768--center {
  max-width: 768px;
  margin: 0 auto;
}

.back--white {
  background-color: #fff;
}
.back--black {
  background-color: #2d2d2d;
}
.back--yellow {
  background-color: #d6c600;
}

.grid {
  display: grid;
}
.grid--4--12 {
  max-width: calc(100% - 33.33%);
  margin: 0 auto;
}
.grid__3 {
  grid-template: 1fr / 1fr 1fr 1fr;
}
.grid__gap--35 {
  grid-gap: 35px;
}

.text--center {
  text-align: center;
}
.text--white {
  color: #fff;
}
.text--black {
  color: #2d2d2d;
}
.text--yellow {
  color: #d6c600;
}
.text--muli {
  font-family: "Muli", sans-serif;
}
.text--extrabold {
  font-weight: 900;
}
.text--normal {
  font-size: 18px;
  line-height: 31px;
}
.text--big {
  font-size: 24px;
  line-height: 37px;
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
.m--none {
  margin: 0px;
}
</style>
