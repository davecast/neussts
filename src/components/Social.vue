<template>
  <ul>
    <li :style="styleLi">
      <a :href="facebook">
        <i class="wz-icon wz-facebook"></i>
      </a>
    </li>
    <li :style="styleLi">
      <a :href="twitter">
        <i class="wz-icon wz-twitter-brands"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Social",
  props: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    alignItems: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {
      styleLi: {
        margin:
          this.alignItems === "right" ? "0px 10px 0px 0px" : "0px 0px 0px 10px"
      }
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
}
li {
  margin-left: 15px;
}
a {
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}
a:hover {
  color: #efdc30;
}
</style>
