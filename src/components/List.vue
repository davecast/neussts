<template>
  <li class="list">
    <i class="wz-icon wz-check-double text--black"></i>
    <p class="text--grey--c">
      <strong v-if="title"> {{ title }} </strong> {{ text }}
    </p>
  </li>
</template>

<script>
export default {
  name: "List",
  props: {
    text: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
