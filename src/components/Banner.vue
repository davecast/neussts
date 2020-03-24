<template>
  <section
    class="banner"
    :class="type === 'small' ? 'banner--small' : 'banner--big'"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <section v-if="this.imageArray.length > 0" class="banner__slider">
      <article
        v-for="(picture, index) in this.imageArray"
        :key="index"
        class="banner__slider--item"
        :class="{ banner__slider__item__active: index === 0 }"
      >
        <figure class="banner__slider--item--cover">
          <img
            :src="require(`@/assets/${picture}`)"
            alt="Descripcion de la imagen de noticias"
          />
        </figure>
      </article>
    </section>
    <div
      class="container"
      :class="{ container__slider: this.imageArray.length > 0 }"
    >
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
  props: {
    type: {
      type: String,
      default: "big"
    },
    img: {
      type: String,
      default: ""
    },
    imageArray: {
      type: Array,
      default: function() {
        return [];
      }
    },
    delayMove: {
      type: Number,
      default: 6500
    }
  },
  data() {
    return {
      sliderInterval: "",
      imageUrl: this.img ? require(`@/assets/${this.img}`) : ""
    };
  },
  methods: {
    handleSlider() {
      clearInterval(this.sliderInterval);
      let $bannerActive = document.querySelector(
        ".banner__slider__item__active"
      );
      let $bannerContent = document.querySelector(".banner__slider");

      if ($bannerActive.nextElementSibling == null) {
        $bannerActive.classList.remove("banner__slider__item__active");
        $bannerContent.firstElementChild.classList.add(
          "banner__slider__item__active"
        );
      } else {
        $bannerActive.classList.remove("banner__slider__item__active");
        $bannerActive.nextElementSibling.classList.add(
          "banner__slider__item__active"
        );
      }

      this.handleAutoMove();
    },
    handleAutoMove() {
      this.sliderInterval = setInterval(() => {
        this.handleSlider();
      }, this.delayMove);
    }
  },
  created() {
    if (this.imageArray.length > 0) {
      this.handleAutoMove();
    }
  },
  beforeDestroy() {
    clearInterval(this.sliderInterval);
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
  position: relative;
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
.banner__slider {
  position: absolute;
  background: #222;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
}
.banner__slider--item {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
}

.banner__slider--item.banner__slider__item__active {
  z-index: 1;
  opacity: 1;
  transition: all 0.5s ease-in 0s;
}

.banner__slider--item--cover {
  margin: 0;
  padding: 0;
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
}
.banner__slider--item--cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transform: scale(1);
  transition: all 0.3s ease-in;
}
.banner__slider--item.banner__slider__item__active
  .banner__slider--item--cover
  img {
  transform: scale(1.05);
}
.container__slider {
  z-index: 1;
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
