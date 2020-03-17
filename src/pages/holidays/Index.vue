<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Business Holidays</h6>
                <br />
                <p>
                    The following business holidays are unselectable delivery or
                    pickup dates when ordering.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md"></div>
    </q-page>
</template>
<style lang="scss" scoped></style>
<script>
export default {
    name: "HolidayIndex",
    preFetch({ store }) {
        console.log("prefetch called");
    },
    meta() {
        return {
            title: "Business Holidays"
        };
    }
};
</script>
