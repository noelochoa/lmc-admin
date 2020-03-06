<template>
  <q-page class="flex flex-center">
    <div class="blur-bg"></div>
    <div class="noblur-fg">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    </div>
  </q-page>
</template>
<style lang="scss" scoped>
.blur-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  /* Center and scale the image nicely */
  background-image: url("../statics/bg-cms.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* Add the blur effect */
  filter: blur(10px);
  -webkit-filter: blur(10px);
}
</style>
<script>
export default {
  name: "PageIndex"
};
</script>
