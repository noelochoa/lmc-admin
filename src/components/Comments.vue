 <template>
  <q-item clickable v-ripple :to="'/comments/reply/'+ id">
    <q-item-section>
      <q-item-label class="comment">{{author}} posted:</q-item-label>
      <q-item-label caption class="comment text-primary">{{text}}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption class="text-white">{{posted_format}}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<style lang="scss" scoped>
.comment {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: inherit;
}
</style>
<script>
export default {
  name: "Comments",
  props: {
    id: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    posted: {
      type: String,
      default: new Date()
    }
  },
  computed: {
    posted_format() {
      if (!this.posted) return "";

      const options = {
        weekday: "short",
        month: "short",
        day: "numeric"
      };
      const dt = new Date(this.posted);
      return dt.toLocaleDateString("en-US", options);
    }
  }
};
</script>
