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
                <div class="bg-gray-alpha relative-position">
                    <q-date
                        no-unset
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
                    <q-inner-loading :showing="loading">
                        <q-spinner color="white" size="2em" />
                    </q-inner-loading>
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
let Holiday = null;

export default {
    name: "HolidayIndex",
    components: { ConfirmDialog, Holidays },
    mixins: [HelperMixin],

    meta() {
        return {
            title: "Business Holidays"
        };
    },
    beforeCreate() {
        Holiday = this.$RepositoryFactory.get("holidays");
    },
    async created() {
        this.date = this.today.yyyymmdd;
        this.startOfMonth = this.startDayOfMonth;
        this.endOfMonth = this.lastDayOfMonth;

        if (process.env.CLIENT) {
            await this.getHolidays();
            this.data.splice(
                0,
                this.data.length,
                ...this.selectInclusive(this.date)
            );
        }
    },
    computed: {
        holidayList() {
            const dayList = new Set();
            this.holidayItems.map(item => {
                const start = this.findMaxDt(item.start, this.startOfMonth);
                const end = this.findMinDt(item.end, this.endOfMonth);
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
            date: "",
            startOfMonth: "",
            endOfMonth: "",
            data: [],
            holidayItems: [],
            loading: true,
            showDlg: false,
            toDelID: -1
        };
    },
    methods: {
        selectInclusive(val) {
            const dt = new Date(val).setHours(0, 0, 0, 0);
            return this.holidayItems.filter(function(item) {
                const start = new Date(item.start).setHours(0, 0, 0, 0),
                    end = new Date(item.end).setHours(0, 0, 0, 0);
                return !(dt < start || dt > end);
            });
        },

        async getHolidaysList(value, reason, details) {
            if (reason == "month" || reason == "year") {
                // Has changed month/year, refresh
                const d = new Date(value);
                this.startOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
                this.endOfMonth = new Date(
                    d.getFullYear(),
                    d.getMonth() + 1,
                    0
                );
                // Retrieve new list
                await this.getHolidays(details);
            }

            this.data.splice(
                0,
                this.data.length,
                ...this.selectInclusive(value)
            );
        },

        async getHolidays(details) {
            this.loading = true;
            try {
                const resp = await Holiday.getBusinessHolidays(details);
                this.holidayItems = resp.slice();
            } catch (err) {
                this.showNotif(
                    false,
                    "Could not retrieve holiday entries for selected month. "
                );
            } finally {
                this.loading = false;
            }
        },

        async onRemove() {
            if (this.toDelID !== -1) {
                try {
                    const resp = await Holiday.deleteHoliday(this.toDelID);
                    this.showNotif(true, "Successfully removed holiday entry.");

                    // Remove from list and Reset
                    this.$delete(
                        this.data,
                        this.data.findIndex(el => el.id == this.toDelID)
                    );
                    this.$delete(
                        this.holidayItems,
                        this.holidayItems.findIndex(el => el.id == this.toDelID)
                    );
                    this.toDelID = -1;
                } catch (err) {
                    this.showNotif(false, "Could not delete item. ");
                }
            }
        },

        confirmDel(holidayID) {
            this.toDelID = holidayID;
            this.showDlg = true;
        }
    }
};
</script>
