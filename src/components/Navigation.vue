<template>
  <q-item exact clickable v-ripple tag="a" :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    title: {
      type: String,
      required: true
    },

    active: {
      type: Boolean,
      default: false
    },

    link: {
      type: String,
      default: "#"
    },

    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
