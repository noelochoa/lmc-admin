<script>
export default {
    created() {},
    computed: {
        today() {
            const d = new Date();
            const today = {
                month: d.toLocaleString("en-US", { month: "long" }),
                year: d.getFullYear(),
                dayOfMonth: d.getDate(),
                dayOfWeek: d.getDay(),
                human: d.toLocaleString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }),
                iso: d.toISOString(),
                yyyymmdd:
                    d.getFullYear() +
                    "-" +
                    (d.getMonth() + 1).toString().padStart(2, 0) +
                    "-" +
                    d.getDate()
            };
            return today;
        }
    },
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
