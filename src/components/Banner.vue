<template>
  <section
    class="banner"
    :class="type === 'small' ? 'banner--small' : 'banner--big'"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div class="container">
      <div v-if="type === 'small'" class="banner__content">
        <slot></slot>
      </div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: ["type", "img"],
  data() {
    return {
      imageUrl: require(`@/assets/${this.img}`)
    };
  }
};
</script>

<style scoped>
.banner {
  height: calc(100vh - 135px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner--small {
  max-height: 500px;
  margin-top: 34px;
}
.banner__content {
  margin-top: 45px;
}
.banner__title--big {
  font-size: 44px;
  line-height: 54px;
}
.banner__title--medium {
  font-size: 34px;
  line-height: 34px;
}
.banner__title--separator {
  position: relative;
  padding-bottom: 30px;
}
.banner__title--separator::before {
  position: absolute;
  content: "";
  width: 100px;
  height: 4px;
  background: #efdc30;
  bottom: -2px;
}
.banner__title--text {
  width: 595px;
}
@media screen and (max-width: 980px) {
  .banner {
    height: 595px;
  }
  .banner__title--big {
    font-size: 32px;
    line-height: 42px;
  }
  .banner--small {
    max-height: 400px;
    margin-top: 0px;
  }
  .banner__title--text {
    width: 390px;
  }
  .banner__title--separator {
    padding-bottom: 25px;
  }
  .banner__title--separator.mb--x3 {
    margin-bottom: 25px;
  }
}

@media screen and (max-width: 595px) {
  .banner {
    height: calc(100vh - 135px);
  }
  .banner__content {
    text-align: center;
  }
  .banner__title--big {
    font-size: 22px;
    line-height: 32px;
  }
  .banner__title--medium {
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }
  .banner__title--text {
    max-width: 280px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin: 0 auto;
  }
  .banner__title--separator::before {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>
