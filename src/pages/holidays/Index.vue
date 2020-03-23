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
                        event-color="orange"
                        emit-immediately
                        flat
                        minimal
                        @input="getHolidaysList"
                    />
                </div>
            </div>
            <div class="content-2">
                <q-tab-panels
                    class="bg-none"
                    v-model="date"
                    animated
                    transition-prev="jump-up"
                    transition-next="jump-up"
                >
                    <q-tab-panel
                        v-for="item in holidayItems"
                        :key="item.id"
                        :name="item.value"
                        class="bg-gray-alpha"
                    >
                        <div class="text-subtitle2 q-mb-md holiday-item">
                            <div class="reason">
                                {{ item.reason }}
                            </div>
                            <div>
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
                            </div>
                        </div>
                        <q-item class="detail-field" dense>
                            <span class="field-label"> Start</span>
                            <span class="text-primary field-value">
                                {{ humanReadableDt(item.start) }}
                            </span>
                        </q-item>
                        <q-item class="detail-field" dense>
                            <span class="field-label"> End</span>
                            <span class="text-primary field-value">
                                {{ humanReadableDt(item.end) }}
                            </span>
                        </q-item>
                    </q-tab-panel>
                </q-tab-panels>
                <ConfirmDialog :showDlg.sync="showDlg">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="delete_forever"
                            color="red-4"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message>
                        Continue on removing this holiday entry?<br />
                        Warning: This action is permanent.
                    </template>
                    <template v-slot:actions>
                        <q-btn
                            flat
                            label="Cancel"
                            color="black"
                            v-close-popup
                        />
                        <q-btn
                            flat
                            label="Remove"
                            color="red-4"
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
    grid-template-rows: auto;
    grid-template-areas: "heading-caption heading-stat-1";
    grid-column-gap: 1rem;
}
.heading-caption {
    grid-area: heading-caption;
}
.page-contents {
    grid-template-columns: 1fr minmax(200px, 300px) 1fr;
    grid-template-rows: auto;
    grid-template-areas: "content-1 content-2 .";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
}
.content-2 {
    grid-area: content-2;
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
.holiday-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.reason {
    overflow: auto;
    overflow-wrap: break-word;
    hyphens: auto;
    flex: 1 1 auto;
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
.bg-none {
    background: none !important;
}
.detail-field {
    flex-direction: row;
    padding-left: 0 !important;
}
.detail-field .field-label {
    width: 50px;
}
.detail-field .field-value {
    flex: 1;
}

@media (max-width: 780px) {
    .page-contents {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "content-1 ."
            "content-2 .";
    }
}
@media (max-width: 360px) {
    .page-heading {
        grid-template-columns: 1fr;
        grid-template-areas:
            "heading-caption"
            "heading-stat-1";
    }
}
</style>
<style lang="scss">
.holidays-table {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
</style>
<script>
import ConfirmDialog from "../../components/ConfirmDialog";
import HelperMixin from "../../mixins/helpers";

export default {
    name: "HolidayIndex",
    components: { ConfirmDialog },
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
        // this.date = this.today.yyyymmdd;
    },
    mounted() {},
    data() {
        return {
            date: "2020-03-21",
            holidayList: ["2020/03/21", "2020/03/25", "2020/03/27"],
            holidayItems: [
                {
                    id: "111",
                    value: "2020-03-21",
                    reason: "Covid 19 Holiday",
                    start: "2020-03-21T16:30:00+01:00",
                    end: "2020/04/30 16:00"
                },
                {
                    id: "112",
                    value: "2020-03-25",
                    reason:
                        "BusinesBusinessBusinessBusinessBusinessBusinessBusinessBusinessBusinessBusinessBusinesss Holiday",
                    start: "2020/03/25 15:00",
                    end: "2020/03/25 16:00"
                }
            ],
            loading: false,
            showDlg: false,
            toDelID: -1
        };
    },
    methods: {
        confirmDel(psaID) {
            this.showDlg = true;
            this.toDelID = psaID;
        },
        onRemove() {
            if (this.toDelID !== -1) {
                /**TODO */
                this.showNotif(true, "Successfully removed holiday entry.");
            }
            // Reset
            this.toDelID = -1;
        },
        humanReadableDt(val) {
            return this.toHumanReadableDt(val);
        },
        getHolidaysList(value, reason, details) {
            /**TODO */
            console.log(reason);
        }
    }
};
</script>
