 <template>
  <q-item :to="link">
    <q-item-section>
      <q-item-label>{{label}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <h6 class="text-primary">{{value}}</h6>
    </q-item-section>
  </q-item>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  name: "Statistic",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      default: "#"
    }
  }
};
</script>
