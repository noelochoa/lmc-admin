<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Orders</h6>
                <br />
                <p>
                    The following is a list of orders per status for the
                    selected month.
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md flex flex-center">
            <div class="content-1">
                <q-btn
                    flat
                    round
                    icon="post_add"
                    class="q-mr-sm"
                    to="/orders/add/1"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add Order</q-tooltip
                    >
                </q-btn>
                <q-input
                    readonly
                    v-model="selectedMonth"
                    debounce="500"
                    @click="showSelect = true"
                    dark
                    dense
                    outlined
                    mask="####/##"
                >
                    <template v-slot:prepend>
                        <q-icon name="event" />
                    </template>
                </q-input>
            </div>
            <div class="content-2"></div>
        </div>
        <q-dialog v-model="showSelect" persistent>
            <q-card dark>
                <MonthPicker
                    color="primary"
                    locale="en-US"
                    :min="minDate"
                    :max="maxDate"
                    v-model="selDate"
                ></MonthPicker>
                <q-card-actions align="right">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn
                        flat
                        label="OK"
                        color="primary"
                        @click="updateMonth"
                        v-close-popup
                    />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>
<style lang="scss" scoped>
.page-heading,
.page-contents {
    display: grid;
}
.page-heading {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "heading-caption heading-stat-1";
    grid-column-gap: 1rem;
}
.heading-caption {
    grid-area: heading-caption;
}
.heading-stat-1 {
    grid-area: heading-stat-1;
}
.page-contents {
    grid-template-columns: 1fr;
    grid-template-areas:
        "content-1"
        "content-2";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
    min-width: 160px;
    display: flex;
    flex-direction: row;
}
.content-2 {
    grid-area: content-2;
    min-width: 160px;
}

.monthpicker {
    background: #424242;
    color: #fff;
}

@media (max-width: 400px) {
    .page-heading {
        grid-template-columns: 1fr;
        grid-template-areas:
            "heading-caption"
            "heading-stat-1";
    }
    .page-contents {
        grid-template-columns: 1fr;
    }
}
@media (min-width: 1820px) {
    .page-heading {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas: "heading-caption heading-caption heading-stat-1 .";
    }
}
</style>
<script>
import MonthPicker from "../../components/MonthPicker";
export default {
    name: "OrderIndex",
    components: { MonthPicker },
    meta() {
        return {
            title: "Orders"
        };
    },
    computed: {},
    data() {
        const dateToday = new Date();
        return {
            showSelect: false,
            minDate: new Date(2010, 0),
            maxDate: new Date(dateToday.getFullYear() + 10, 11),
            selDate: dateToday,
            selectedMonth:
                dateToday.getFullYear() + "/" + (dateToday.getMonth() + 1)
        };
    },
    methods: {
        selOrders: function(date) {},
        updateMonth: function(evt) {
            if (this.selDate) {
                this.selectedMonth =
                    this.selDate.getFullYear() +
                    "/" +
                    (this.selDate.getMonth() + 1);
            }
        }
    }
};
</script>
