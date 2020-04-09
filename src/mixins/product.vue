<script>
import { mapState, mapGetters, mapActions } from "vuex";
const moduleName = "addProduct";

export default {
    computed: {
        ...mapState(moduleName, ["product"])
    },
    methods: {
        ...mapActions(moduleName, [
            "setProductInfo",
            "setProductImages",
            "setProductOptions",
            "clearState"
        ]),
        ...mapGetters(moduleName, ["getProduct"])
    }
};
</script>
