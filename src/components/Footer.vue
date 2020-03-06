<template>
  <footer>
    <DcSection class="back--black">
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
            <h3 class="footer__title text--white mb--x2">menú</h3>
            <ul class="footer__menu">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">about</router-link>
              </li>
              <li>
                <router-link to="/solutions">Solutions</router-link>
              </li>
              <li>
                <router-link to="/experience">experience</router-link>
              </li>
              <li>
                <router-link to="/products">products</router-link>
              </li>
              <li>
                <router-link to="/contact">contact</router-link>
              </li>
            </ul>
          </div>
          <div class="grid__item">
            <h3 class="footer__title text--white mb--x2">follow us</h3>
            <Social alignItems="right" />
          </div>
        </section>
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
  max-width: 250px;
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
</style>
