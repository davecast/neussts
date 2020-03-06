<template>
  <header class="header" :class="classObject">
    <div class="header__top">
      <div class="container">
        <div class="header__content">
          <Flags />
          <Social
            facebook="https://www.facebook.com/"
            twitter="https://twitter.com/"
          />
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header__content">
          <router-link to="/" class="header__logo">
            <figure>
              <img
                v-if="this.$route.path !== '/'"
                src="@/assets/logo-white.png"
              />
              <img v-else src="@/assets/logo.png" />
            </figure>
          </router-link>
          <ul class="header__menu">
            <li class="header__menu--list">
              <router-link to="/">Home</router-link>
            </li>
            <li class="header__menu--list">
              <router-link to="/about">About</router-link>
            </li>
            <li class="header__menu--list">
              <router-link to="/solutions">Solutions</router-link>
            </li>
            <li class="header__menu--list">
              <router-link to="/experience">Experience</router-link>
            </li>
            <li class="header__menu--list">
              <router-link to="/products">Products &amp; Brands</router-link>
            </li>
            <li class="header__menu--list">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Social from "@/components/Social.vue";
import Flags from "@/components/Flags.vue";

export default {
  name: "Header",
  components: {
    Social,
    Flags
  },
  data() {
    return {};
  },
  computed: {
    classObject: function() {
      return {
        header__transparent: this.$route.path !== "/"
      };
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #efeeee;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.header__top {
  height: 35px;
  background: #2d2d2d;
  display: flex;
  align-items: center;
}
.header__bottom {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
}
.header__logo {
  max-height: inherit;
  overflow: hidden;
  display: block;
  width: 180px;
}
.header__logo figure {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.header__logo figure img {
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.header__menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header__menu--list {
  margin-left: 35px;
}
.header__menu a {
  color: #727272;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 14px;
  position: relative;
  font-weight: 700;
  transition: all 0.3s ease-out;
}
.header__transparent .header__menu a {
  color: #fff;
}
.header__menu a::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 2px;
  background: #222;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -5px;
  opacity: 0;
  transition: all 0.3s ease-out;
}
.header__menu a:hover,
.header__menu a.router-link-exact-active {
  color: #efdc30;
}
.header__menu a.router-link-exact-active::before {
  background: #efdc30;
  opacity: 1;
}
.header__transparent {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
}
</style>
