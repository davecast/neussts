<template>
  <footer class="back--black">
    <div class="container">
      <section class="grid grid__3 grid__gap--35">
        <div class="grid__item">
          <figure class="footer__img">
            <img src="@/assets/logo-white.png" alt="neuss ts" />
          </figure>
        </div>
        <div class="grid__item">
          <h3 class="footer__title">menú</h3>
        </div>
        <div class="grid__item">
          <h3 class="footer__title">follow us</h3>
          <Social />
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import Social from "@/components/Social.vue";

export default {
  name: "Footer",
  components: {
    Social
  }
};
</script>

<style scoped>
.footer__img {
  
}
.footer__img img {

}
</style>
