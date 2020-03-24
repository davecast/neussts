<template>
  <ul class="flags">
    <li class="flags__item">
      <a class="flags__item--number" href="mailto:info@neuss-ts.com">
        <i class="wz-icon wz-envelope"></i> info@neuss-ts.com
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Flags"
};
</script>

<style scoped>
.flags {
  display: flex;
  align-items: center;
}
.flags__item {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.flags__item i {
  color: #fff;
  margin-right: 5px;
  font-size: 12px;
  line-height: 12px;
  margin-top: 1px;
  transition: all 0.3s ease-out;
}
.flags__item--flag {
  width: 25px;
  margin-right: 5px;
}
.flags__item--flag img {
  max-width: 100%;
}
.flags__item--number {
  font-size: 14px;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  line-height: 14px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s ease-out;
}
.flags__item--number:hover,
.flags__item--number:hover i {
  color: #efdc30;
}
</style>
