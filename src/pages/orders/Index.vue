<template>
  <q-page class="q-px-md q-pt-lg">
    <div class="page-heading text-white q-pa-md">
      <div class="heading-caption">
        <h6>Orders</h6>
        <br />
        <p>The following is a list of orders per status for this month.</p>
      </div>
    </div>
    <div class="page-contents text-white q-pa-md"></div>
  </q-page>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  name: "OrderIndex",
  meta() {
    return {
      title: "Orders"
    };
  }
};
</script>
