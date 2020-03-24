<template>
  <ul class="social">
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
    <li :style="styleLi">
      <a :href="linkedin">
        <i class="wz-icon wz-linkedin-brands"></i>
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
    linkedin: {
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
          this.alignItems === "right" ? "0px 15px 0px 0px" : "0px 0px 0px 15px"
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

@media screen and (max-width: 768px) {
  footer .social li:last-child {
    margin: 0 !important;
  }
  footer .social a {
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
