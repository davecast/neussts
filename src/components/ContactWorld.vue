<template>
  <div class="ContactWorld">
    <h2>
      <figure>
        <img :src="require(`@/assets/${this.flag}`)" :alt="this.name" />
      </figure>
      <span>{{ this.name }}</span>
    </h2>
    <ul>
      <li>
        <i class="wz-icon wz-point"></i>
        <strong>{{ this.address }}</strong>
      </li>
      <li>
        <i class="wz-icon wz-id-card"></i>
        {{ this.rif }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactWorld",
  props: {
    name: {
      type: String
    },
    flag: {
      type: String
    },
    address: {
      type: String
    },
    rif: {
      type: String
    }
  }
};
</script>

<style scoped>
.ContactWorld {
  margin-bottom: 25px;
}
h2 {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
h2::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 4px;
  background: #efdc30;
  margin: 0 auto;
  left: 0;
  bottom: -2px;
}
h2 figure {
  margin-right: 10px;
  width: 30px;
}
h2 figure img {
  width: 100%;
  max-width: 100%;
}
h2 span {
  font-size: 28px;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: 900;
}
li {
  color: #aaaaaa;
  font-size: 16px;
  line-height: 20px;
  display: grid;
  margin-bottom: 5px;
  grid-template: 1fr / 25px 1fr;
}
i {
  margin-top: 2px;
}
</style>
