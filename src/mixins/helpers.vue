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
                month: d.toLocaleDateString("en-US", { month: "long" }),
                year: d.getFullYear(),
                dayOfMonth: d.getDate(),
                dayOfWeek: d.getDay(),
                human: d.toLocaleDateString("en-US", {
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
                    d
                        .getDate()
                        .toString()
                        .padStart(2, "0")
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
                this.$router.push(path).catch(err => {});
            }
        },

        toQDateFormat: function(d) {
            // YYYY/MM/DD format
            if (d) {
                return (
                    d.getFullYear() +
                    "/" +
                    (d.getMonth() + 1).toString().padStart(2, 0) +
                    "/" +
                    d
                        .getDate()
                        .toString()
                        .padStart(2, 0)
                );
            }

            return d;
        },

        toHumanReadableDt: function(str_date) {
            const d = new Date(str_date);
            if (!d) return str_date;

            return (
                d.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }) +
                " " +
                d
                    .getHours()
                    .toString()
                    .padStart(2, 0) +
                ":" +
                d
                    .getMinutes()
                    .toString()
                    .padStart(2, 0)
            );
        }
    }
};
</script>
