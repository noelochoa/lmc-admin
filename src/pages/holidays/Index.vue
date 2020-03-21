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
                </div>
                <div class="bg-gray-alpha">
                    <q-date
                        class="date"
                        :value="today.yyyymmdd"
                        mask="YYYY-MM-DD"
                        :events="holidayList"
                        event-color="orange"
                        flat
                        minimal
                        landscape
                    />
                </div>
            </div>
            <div class="content-2">
                <q-tab-panels
                    v-model="date"
                    animated
                    transition-prev="jump-up"
                    transition-next="jump-up"
                >
                    <q-tab-panel name="2020-03-21">
                        <div class="text-h4 q-mb-md">
                            2019/02/01
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                    </q-tab-panel>

                    <q-tab-panel name="2020-03-25" class="text-black">
                        <div class="text-h4 q-mb-md">
                            2019/02/05
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                    </q-tab-panel>
                    <q-tab-panel name="2019-02-06">
                        <div class="text-h4 q-mb-md">
                            2019/02/06
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quis praesentium cumque magnam odio iure
                            quidem, quod illum numquam possimus obcaecati
                            commodi minima assumenda consectetur culpa fuga
                            nulla ullam. In, libero.
                        </p>
                    </q-tab-panel>
                </q-tab-panels>
                <ConfirmDialog v-bind="{ showDlg }" @close="showDlg = false">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="delete_forever"
                            color="red-4"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message>
                        Continue on removing this announcement?<br />
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
    grid-template-columns: 1fr 1fr 1fr;
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
.date {
    width: 100%;
    background: none;
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
.announcement-table {
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
            splitterModel: 25,
            date: "2020-03-21",
            holidayList: ["2020/03/21", "2020/03/25"],
            loading: false,
            showDlg: false,
            toDelID: -1
        };
    },
    methods: {
        searchClear(evt) {
            this.search = "";
            /** TODO */
            this.$router.replace("/announcements");
        },
        searchInput(val) {
            /** TODO */
            this.$router
                .push({
                    query: Object.assign({}, this.$route.query, { s: val })
                })
                .catch(err => {});
        },
        /**TODO */
        onRequest(props) {
            this.loading = true;

            // emulate server
            setTimeout(() => {
                // clear out existing data and add new
                this.data = this.original;
                this.loading = false;
            }, 500);
        },
        confirmDel(psaID) {
            this.showDlg = true;
            this.toDelID = psaID;
        },
        onRemove() {
            if (this.toDelID !== -1) {
                /**TODO */
                this.showNotif(true, "Successfully removed announcement.");
            }
            // Reset
            this.toDelID = -1;
        }
    }
};
</script>
