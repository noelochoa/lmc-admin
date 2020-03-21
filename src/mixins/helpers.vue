<script>
export default {
    data() {
        return {
            prevRoute: null
        };
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from;
        });
    },
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
        replaceAll: function(txt, search, replace) {
            return txt.replace(new RegExp(search, "g"), replace);
        },

        showNotif: function(isSuccess, msg) {
            this.$q.notify({
                color: isSuccess ? "green-4" : "negative",
                textColor: "white",
                icon: isSuccess ? "check_circle_outline" : "error_outline",
                timeout: "2500",
                position: "top",
                message: msg
            });
        },

        returnToPageIndex: function(path) {
            if (this.prevRoute && this.prevRoute.path !== "/") {
                this.$router.go(-1);
            } else {
                this.$router.push(path);
            }
        }
    }
};
</script>
