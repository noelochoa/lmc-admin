<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapState("addProduct", ["product"])
    },
    methods: {
        ...mapActions("addProduct", [
            "setProductInfo",
            "setProductImages",
            "setProductOptions"
        ]),
        ...mapGetters("addProduct", ["getProduct"])
    }
};
</script>
