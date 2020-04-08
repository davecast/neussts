<template>
  <header class="header" :class="classObject">
    <div class="header__top" :class="{ header__top__fixed: isFixed }">
      <div class="container">
        <div class="header__content">
          <Flags />
          <Social
            facebook="https://www.facebook.com/Neuss-Techical-Services-Inc-106581107673074"
            instagram="https://www.instagram.com/neuss_ts_inc/"
            linkedin="https://www.linkedin.com/company/neuss-technical-services/"
          />
        </div>
      </div>
    </div>
    <div class="header__bottom" :class="{ header__bottom__fixed: isFixed }">
      <div class="container">
        <div class="header__content">
          <router-link to="/" class="header__logo">
            <figure>
              <img
                v-if="
                  this.$route.path !== '/' && !isFixed && this.windowWidth > 980
                "
                src="@/assets/logo-white.png"
              />
              <img v-else src="@/assets/logo.png" />
            </figure>
          </router-link>
          <ul class="header__menu" :class="{ header__open: this.burgerOpen }">
            <li class="header__menu--list">
              <router-link v-on:click.native="handleMenu()" to="/"
                >Home</router-link
              >
            </li>
            <li class="header__menu--list">
              <router-link v-on:click.native="handleMenu()" to="/company"
                >Company</router-link
              >
            </li>
            <li class="header__menu--list">
              <router-link v-on:click.native="handleMenu()" to="/solutions"
                >Solutions</router-link
              >
            </li>
            <!--<li class="header__menu--list">
              <router-link v-on:click.native="handleMenu()" to="/experience"
                >Experience</router-link
              >
            </li>-->
            <li class="header__menu--list">
              <router-link v-on:click.native="handleMenu()" to="/products"
                >Products</router-link
              >
            </li>
            <li class="header__menu--list">
              <router-link v-on:click.native="handleMenu()" to="/contact"
                >Contact</router-link
              >
            </li>
          </ul>
          <div class="burger" @click="handleMenu">
            <i v-if="!burgerOpen" class="wz-icon wz-bar"></i>
            <i v-else class="wz-icon wz-closed"></i>
          </div>
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
    return {
      isFixed: false,
      burgerOpen: false,
      windowWidth: window.innerWidth
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset >= 135) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    handleMenu() {
      this.burgerOpen = !this.burgerOpen;
    }
  },
  computed: {
    classObject: function() {
      return {
        header__transparent: this.$route.path !== "/" && this.windowWidth > 980
      };
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
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
  z-index: 9;
}
.header__top {
  height: 35px;
  background: #2d2d2d;
  display: flex;
  align-items: center;
}
.header__top__fixed {
  margin-bottom: 100px;
}
.header__bottom {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease-in-out;
}
.header__bottom__fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 70px;
  z-index: 9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}
.header__transparent .header__bottom__fixed {
  transition: all 0.3s ease-in-out;
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
  width: 250px;
}
.header__bottom__fixed .header__logo {
  width: 200px;
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
  z-index: 9;
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
.header__transparent .header__bottom__fixed .header__menu a {
  color: #727272;
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
.burger {
  display: none;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  line-height: 28px;
  color: #2d2d2d;
}
@media screen and (max-width: 980px) {
  .burger {
    display: flex;
  }
  .header__bottom {
    position: relative;
  }
  .header__bottom.header__bottom__fixed {
    position: fixed;
  }
  .header__menu {
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    background: #fff;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transform: translateY(-10px);
    padding: 0;
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in;
  }
  .header__open {
    height: auto;
    overflow: hidden;
    transform: translateY(0px);
    padding: 20px;
    opacity: 1;
  }
  .header__bottom.header__bottom__fixed .header__menu {
    top: 69px;
  }
  .header__transparent .header__menu a,
  .header__transparent .header__bottom__fixed .header__menu a {
    color: #727272;
  }
  .header__menu a:hover,
  .header__menu a.router-link-exact-active {
    color: #efdc30;
  }
  .header__menu--list {
    margin-left: 0px;
    padding: 5px 15px;
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 768px) {
  .flags {
    display: none;
  }
  .header__top .header__content {
    justify-content: flex-end;
  }
}
@media screen and (max-width: 595px) {
  .header__logo {
    max-width: 180px;
  }
  .header__logo figure img {
    width: 180px;
    height: 100%;
    visibility: visible !important;
  }
}
</style>
