<template>
  <footer>
    <DcSection class="back--black footer--top" pd="55px 0px">
      <div class="container">
        <section class="grid grid__2--2--1 grid__gap--35">
          <div class="grid__item">
            <router-link to="/" class="footer__logo">
              <figure class="footer__img">
                <img src="@/assets/logo-white.png" alt="neuss ts" />
              </figure>
            </router-link>
          </div>
          <div class="grid__item">
            <h3 class="footer__title text--white mb--x2">menu</h3>
            <ul class="footer__menu">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/company">company</router-link>
              </li>
              <li>
                <router-link to="/solutions">Solutions</router-link>
              </li>
              <!--<li>
                <router-link to="/experience">experience</router-link>
              </li>-->
              <li>
                <router-link to="/products">products</router-link>
              </li>
              <li>
                <router-link to="/contact">contact</router-link>
              </li>
            </ul>
          </div>
          <div class="grid__item">
            <h3 class="footer__title text--white mb--x2">social media</h3>
            <Social alignItems="right" />
          </div>
        </section>
      </div>
    </DcSection>
    <DcSection pd="0px" class="back--grey--b footer--bottom">
      <div class="container">
        <div class="footer__bottom">
          <p>
            © 2020 <strong>NEUSS TECNICAL SERVICES</strong>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </DcSection>
  </footer>
</template>

<script>
import Social from "@/components/Social.vue";
import DcSection from "@/layouts/DcSection.vue";

export default {
  name: "Footer",
  components: {
    Social,
    DcSection
  }
};
</script>

<style scoped>
.footer__logo {
  display: inline-block;
}
.footer__img {
  max-width: 300px;
}
.footer__img img {
  max-width: 100%;
}
.footer__title {
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
}
.footer__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 350px;
}
.footer__menu li {
  position: relative;
}
.footer__menu li::after {
  content: "/";
  margin: 0 10px;
  color: #fff;
}
.footer__menu li:last-child::after {
  display: none;
}
.footer__menu a {
  font-size: 16px;
  line-height: 31px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  color: #aaaaaa;
  text-transform: capitalize;
  letter-spacing: 0.75px;
}
.footer__menu a:hover,
.footer__menu a.router-link-exact-active {
  color: #efdc30;
}
.footer__bottom {
  padding: 15px 0;
}
.footer__bottom p {
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
}
.footer__bottom strong {
  color: #d6c600;
}
.footer__bottom a {
  font-family: "Open Sans", sans-serif;
  color: #d6c600;
}
.footer__bottom a:hover {
  color: #fff;
}
.footer__bottom span {
  display: inline-block;
  margin: 0 3px 0 5px;
}

@media screen and (max-width: 980px) {
  .footer__img {
    max-width: 200px;
  }
}
@media screen and (max-width: 768px) {
  footer .footer--top {
    padding: 35px 0px !important;
  }
  .grid__2--2--1 {
    grid-gap: 20px;
    grid-template: 1fr / 1fr;
    text-align: center;
  }
  footer .grid__item:nth-child(2) {
    order: 3;
  }
  footer .grid__item:nth-child(3) {
    order: 2;
  }
  footer .social {
    justify-content: center;
  }
  .footer__menu {
    max-width: 380px;
    margin: 0 auto;
    justify-content: center;
  }
  .footer__bottom p {
    line-height: 24px;
    margin: 0 auto;
    max-width: 380px;
  }
}
</style>
