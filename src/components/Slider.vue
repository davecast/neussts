<template>
  <div class="brand__carousel">
    <ul ref="dcSlider" class="brand__carousel--content">
      <li
        v-for="(picture, index) in this.pictures"
        :key="index"
        class="brand__carousel--list"
      >
        <figure>
          <img :src="require(`@/assets${picture}`)" :alt="index" />
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    pictures: {
      type: Array,
      default: function() {
        return [];
      }
    },
    timeDelay: {
      type: Number,
      default: 600
    },
    timeStart: {
      type: Number,
      default: 3000
    },
    velocity: {
      type: Number,
      default: 15
    },
    infinite: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      interation: "",
      marginStart: 0
    };
  },
  methods: {
    handleReset() {
      this.$refs.dcSlider.style.transition = `all 0s ease`;
      this.$refs.dcSlider.style.marginLeft = `-154px`;
    },
    handleClear() {
      clearInterval(this.interation);
    },
    handleMove() {
      this.handleClear();
      this.$refs.dcSlider.style.transition = `all .3s ease`;
      this.$refs.dcSlider.style.marginLeft = `-${154 * 2}px`;
      setTimeout(() => {
        this.$refs.dcSlider.insertBefore(
          this.$refs.dcSlider.firstElementChild,
          this.$refs.dcSlider.lastElementChild.nextSibling
        );
        this.handleReset();
        this.handlePlay();
      }, 320);
    },
    handlePlay() {
      this.interation = setInterval(() => {
        this.handleMove();
      }, this.timeDelay);
    },
    handleInfinitePlay() {
      this.interation = setInterval(() => {
        if (this.marginStart == 153) {
          //$brandCarousel.insertBefore( $brandCarousel.firstElementChild, $brandCarousel.lastElementChild.nextSibling);
          this.$refs.dcSlider.insertBefore(
            this.$refs.dcSlider.firstElementChild,
            this.$refs.dcSlider.lastElementChild.nextSibling
          );
          this.marginStart = this.marginStart - 153;
        }
        this.marginStart += 1;
        this.$refs.dcSlider.style.marginLeft = `-${this.marginStart}px`;
      }, this.velocity);
    },
    infinitePlay() {
      this.interation = setInterval(() => {
        clearInterval(this.interation);
        this.handleInfinitePlay();
      }, this.timeStart);
    }
  },
  created() {
    if (this.pictures.length > 0) {
      if (this.infinite) {
        this.infinitePlay();
      } else {
        this.handlePlay();
      }
    }
  },
  mounted() {
    this.$refs.dcSlider.style.gridTemplate = `1fr / repeat(${this.$refs.dcSlider.children.length}, 134px)`;
    this.$refs.dcSlider.style.gridGap = `20px`;
    if (!this.infinite) {
      this.$refs.dcSlider.style.marginLeft = `-154px`;
      this.$refs.dcSlider.insertBefore(
        this.$refs.dcSlider.lastElementChild,
        this.$refs.dcSlider.firstElementChild
      );
    }
  },
  beforeDestroy() {
    this.handleClear();
  }
};
</script>

<style scoped>
.brand__carousel {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  overflow: hidden;
  position: relative;
}
.brand__carousel--content {
  display: grid;
  position: relative;
}
.brand__carousel--list {
  width: 134px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand__carousel--list figure {
}
.brand__carousel--list figure img {
  width: 100%;
  height: 75px;
  object-fit: contain;
}
@media screen and (max-width: 768px) {
  .brand__carousel {
    max-width: 442px;
  }
}

@media screen and (max-width: 595px) {
}
</style>
