<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <router-link to="/" class="header__logo">
          <figure>
            <img src="@/assets/logo.png" />
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
            <router-link to="/partners">Partners</router-link>
          </li>
          <li class="header__menu--list">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: "@/assets/logo.png"
    };
  }
};
</script>

<style scoped>
.header {
  background-color: #fff;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #efeeee;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 100px;
}
.header__menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header__menu--list {
  margin-left: 30px;
}
.header__menu a {
  color: #2c3e50;
  text-transform: uppercase;
}
.header__menu a:hover,
.header__menu a.router-link-exact-active {
  color: #42b983;
}
</style>
