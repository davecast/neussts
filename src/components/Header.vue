<template>
  <header class="header">
    <div class="container">
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
  background-color: #222;
  color: #fff;
}
.header__menu {
  padding: 30px;
}
.header__menu a {
  font-weight: bold;
  color: #2c3e50;
}
.header__menu a.router-link-exact-active {
  color: #42b983;
}
</style>
