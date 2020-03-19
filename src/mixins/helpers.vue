<script>
export default {
    created() {},
    methods: {
        // Shared methods
        showNotif: function(isSuccess, msg) {
            this.$q.notify({
                color: isSuccess ? "green-4" : "negative",
                textColor: "white",
                icon: isSuccess ? "check_circle_outline" : "error_outline",
                timeout: "2500",
                position: "top",
                message: msg
            });
        }
    }
};
</script>
