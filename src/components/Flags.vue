<template>
  <ul class="flags">
    <li class="flags__item">
      <figure class="flags__item--flag">
        <img src="@/assets/canada.png" />
      </figure>
      <a class="flags__item--number" href="tel:+15149998340">
        +1-514-999-8340
      </a>
    </li>
    <li class="flags__item">
      <figure class="flags__item--flag">
        <img src="@/assets/venezuela.png" />
      </figure>
      <a class="flags__item--number" href="tel:+584243240195">
        +58-424-324-0195
      </a>
    </li>
    <li class="flags__item">
      <figure class="flags__item--flag">
        <img src="@/assets/peru.png" />
      </figure>
      <a class="flags__item--number" href="tel:+51972213860">
        +51-972-213-860
      </a>
    </li>
    <li class="flags__item">
      <figure class="flags__item--flag">
        <img src="@/assets/colombia.png" />
      </figure>
      <a class="flags__item--number" href="tel:+573015620083">
        +57-301-562-0083
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
  transition: all 0.3s ease-out;
}
.flags__item--number:hover {
  color: #efdc30;
}
</style>
