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
            <div class="heading-stat-1 text-caption">
                Today
                <br />
                <p class="text-subtitle2">
                    {{ today.human }}
                </p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="calendar_today"
                        class="caption-icon q-mx-md"
                    />Business Holidays
                    <q-btn
                        flat
                        dense
                        rounded
                        icon="add"
                        class="ml-auto q-mx-md"
                        to="/holidays/add"
                    >
                        <q-tooltip
                            anchor="bottom right"
                            self="top middle"
                            :offset="[10, 10]"
                            >Add new
                        </q-tooltip>
                    </q-btn>
                </div>
                <div class="bg-gray-alpha">
                    <q-date
                        class="date"
                        v-model="date"
                        mask="YYYY-MM-DD"
                        :events="holidayList"
                        :options="holidayList"
                        event-color="orange"
                        emit-immediately
                        flat
                        minimal
                        @input="getHolidaysList"
                    />
                </div>
            </div>
            <div class="content-2">
                <Holidays v-bind="{ date, data }">
                    <template v-slot:actions="{ item }">
                        <q-btn
                            dense
                            flat
                            rounded
                            icon="edit"
                            :to="'/holidays/edit/' + item.id"
                        >
                            <q-tooltip
                                anchor="bottom right"
                                self="top middle"
                                :offset="[10, 10]"
                                >Edit
                            </q-tooltip>
                        </q-btn>
                        <q-btn
                            dense
                            flat
                            rounded
                            icon="delete"
                            @click="confirmDel(item.id)"
                        >
                            <q-tooltip
                                anchor="bottom right"
                                self="top middle"
                                :offset="[10, 10]"
                                >Delete
                            </q-tooltip>
                        </q-btn>
                    </template>
                </Holidays>
                <ConfirmDialog :showDlg.sync="showDlg">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="delete_forever"
                            color="red-5"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message>
                        Continue on removing this holiday entry?<br />
                        Warning: This action is permanent.
                    </template>
                    <template v-slot:actions>
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn
                            flat
                            label="Remove"
                            color="red-5"
                            @click="onRemove"
                            v-close-popup
                        />
                    </template>
                </ConfirmDialog>
            </div>
        </div>
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
    grid-template-columns: repeat(auto-fit, 360px);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
div[class*="content-"] > div {
    min-height: 4em;
    justify-content: left;
    background: rgba(128, 128, 128, 0.35);
    margin: 1px 0;
    width: 100%;
}
div[class*="content-"] > div:nth-child(2) {
    background: rgba(128, 128, 128, 0.55);
}
.ml-auto {
    margin-left: auto;
}
.caption-icon {
    font-size: 2.5rem;
    display: inline-flex;
}
.date {
    width: 100%;
    background: none;
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
import ConfirmDialog from "../../components/ConfirmDialog";
import Holidays from "../../components/Holidays";
import HelperMixin from "../../mixins/helpers";

export default {
    name: "HolidayIndex",
    components: { ConfirmDialog, Holidays },
    mixins: [HelperMixin],

    preFetch({ store }) {
        console.log("prefetch called");
    },
    meta() {
        return {
            title: "Business Holidays"
        };
    },
    created() {
        this.data.splice(
            0,
            this.data.length,
            ...this.selectInclusive(this.date)
        );
    },
    computed: {
        holidayList() {
            const dayList = new Set();
            this.holidayItems.map(item => {
                const start = new Date(item.start),
                    end = new Date(item.end);

                // console.log(start, end);
                for (
                    let dt = start;
                    dt.getTime() <= end.getTime();
                    dt.setDate(dt.getDate() + 1)
                ) {
                    dayList.add(this.toQDateFormat(dt));
                }
            });
            // console.log(dayList);
            return [...dayList];
        }
    },
    data() {
        return {
            date: "2020-03-19",
            // holidayList: ["2020/03/21", "2020/03/25", "2020/03/27"],
            data: [],
            holidayItems: [
                {
                    id: "111",
                    reason: "Business Holiday",
                    start: "2020-03-18 16:00:00+00:00",
                    end: "2020/03/22 19:00:00"
                },
                {
                    id: "112",
                    reason: "Emergency Store Renovation",
                    start: "2020-03-20 15:00:00+00:00",
                    end: "2020/03/25 19:00:00"
                },
                {
                    id: "113",
                    reason: "Covid 19 Holiday 3",
                    start: "2020-03-30 15:00:00+00:00",
                    end: "2020/04/03 19:00:00"
                }
            ],
            loading: false,
            showDlg: false,
            toDelID: -1
        };
    },
    methods: {
        confirmDel(psaID) {
            this.toDelID = psaID;
            this.showDlg = true;
        },
        onRemove() {
            if (this.toDelID !== -1) {
                /**TODO */
                this.showNotif(
                    true,
                    "Successfully removed holiday entry." + this.toDelID
                );
            }
            // Reset
            this.toDelID = -1;
        },
        selectInclusive(val) {
            const dt = new Date(val);
            return this.holidayItems.filter(function(item) {
                const start = new Date(item.start),
                    end = new Date(item.end);
                return start <= dt && end >= dt;
            });
        },
        getHolidaysList(value, reason, details) {
            this.data.splice(
                0,
                this.data.length,
                ...this.selectInclusive(value)
            );
            /**TODO */
            console.log(reason);
        }
    }
};
</script>
