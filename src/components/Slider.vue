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
      default: 3000
    }
  },
  data() {
    return {
      interation: ""
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
    }
  },
  created() {
    if (this.pictures.length > 0) {
      this.handlePlay();
    }
  },
  mounted() {
    this.$refs.dcSlider.style.gridTemplate = `1fr / repeat(${this.$refs.dcSlider.children.length}, 134px)`;
    this.$refs.dcSlider.style.gridGap = `20px`;
    this.$refs.dcSlider.style.marginLeft = `-154px`;
    this.$refs.dcSlider.insertBefore(
      this.$refs.dcSlider.lastElementChild,
      this.$refs.dcSlider.firstElementChild
    );
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
}
.brand__carousel--content {
  display: grid;
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
