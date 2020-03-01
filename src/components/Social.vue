<template>
  <ul>
    <li>
      <a :href="facebook">
        <i class="wz-icon wz-facebook"></i>
      </a>
    </li>
    <li>
      <a :href="twitter">
        <i class="wz-icon wz-twitter-brands"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Social",
  props: ["facebook", "twitter"],
  data() {
    return {};
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
  transition: all 0.3s ease-out;
}
a:hover {
  color: #efdc30;
}
</style>
