<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
body {
  margin: 0px;
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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*Tools*/

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
