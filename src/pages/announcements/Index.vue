<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Store Announcements</h6>
                <br />
                <p>
                    The following is a list web store announcements. <br />
                    Note that only one entry will be visible at a time for
                    overlapping dates.
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
                <q-input
                    v-model="search"
                    type="search"
                    debounce="500"
                    @input="searchInput"
                    dark
                    dense
                    outlined
                >
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                    <template v-slot:append>
                        <transition name="fade">
                            <q-icon
                                v-show="search != ''"
                                name="close"
                                class="cursor-pointer"
                                @click="search = ''"
                            />
                        </transition>
                    </template>
                </q-input>
            </div>
            <div class="content-2">
                <q-table
                    grid
                    class="announcement-table"
                    row-key="id"
                    :data="data"
                    :columns="columns"
                    :rows-per-page-options="[0]"
                    :pagination.sync="pagination"
                    :filter="nameFilter"
                    @request="onRequest"
                >
                    <template v-slot:item="props">
                        <div
                            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3"
                        >
                            <q-card class="bg-grey-9">
                                <q-card-section>
                                    {{ props.row.text }}
                                </q-card-section>
                                <q-separator />
                                <q-list dense>
                                    <q-item
                                        v-for="col in props.cols.filter(
                                            col => col.name !== 'text'
                                        )"
                                        :key="col.name"
                                    >
                                        <q-item-section>
                                            <q-item-label>{{
                                                col.label
                                            }}</q-item-label>
                                        </q-item-section>
                                        <q-item-section side>
                                            <q-item-label
                                                class="text-primary"
                                                >{{ col.value }}</q-item-label
                                            >
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                                <q-separator />
                                <q-card-actions>
                                    <q-btn dense flat round icon="build">
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Edit Announcement</q-tooltip
                                        >
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="delete_outline"
                                        ><q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Delete Announcement</q-tooltip
                                        >
                                    </q-btn>
                                </q-card-actions>
                            </q-card>
                        </div>
                    </template>
                </q-table>
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "content-1 . . ."
        "content-2 content-2 content-2 content-2";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
    min-width: 160px;
}
.content-2 {
    grid-area: content-2;
}
.q-card__section {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
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
export default {
    name: "AnnoucementIndex",
    preFetch({ store }) {
        console.log("prefetch called");
    },
    meta() {
        return {
            title: "Store Announcements"
        };
    },
    mounted() {
        this.onRequest({
            pagination: this.pagination,
            filter: undefined
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
                yyyymmdd:
                    d.getFullYear() +
                    "/" +
                    (d.getMonth() + 1).toString().padStart(2, 0) +
                    "/" +
                    d.getDate()
            };
            return today;
        }
    },
    data() {
        return {
            announcementList: [],
            search: "",
            searchReq: null,
            nameFilter: "",
            loading: false,
            pagination: {
                sortBy: "start",
                descending: true,
                page: 1,
                rowsPerPage: 3
            },
            columns: [
                {
                    name: "text",
                    required: true,
                    label: "Text",
                    align: "left",
                    sortable: true
                },
                {
                    name: "start",
                    field: "start",
                    align: "left",
                    label: "Start",
                    sortable: true
                },
                {
                    name: "end",
                    field: "end",
                    align: "left",
                    label: "End",
                    sortable: true
                }
            ],
            data: [],
            original: [
                {
                    id: 1,
                    text:
                        "Announcement Announcement AnnouncementAnnouncementAnnouncementAnnouncementAnnouncementAnnouncementAnnouncement",
                    start: "Feb 20, 2020",
                    end: "Mar 4, 2020"
                },
                {
                    id: 2,
                    text:
                        "LoremLoremLoremLoremLoremLoremLoremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    start: "March 20, 2020",
                    end: "March 25, 2020"
                },
                {
                    id: 3,
                    text: "Announcement 3",
                    start: "March 20, 2020",
                    end: "March 25, 2020"
                },
                {
                    id: 4,
                    text: "Announcement 4",
                    start: "March 20, 2020",
                    end: "March 25, 2020"
                },
                {
                    id: 5,
                    text: "Announcement 5",
                    start: "March 20, 2020",
                    end: "March 25, 2020"
                },
                {
                    id: 6,
                    text: "Announcement 6",
                    start: "March 20, 2020",
                    end: "March 25, 2020"
                },
                {
                    id: 7,
                    text: "Announcement 7",
                    start: "March 20, 2020",
                    end: "March 25, 2020"
                }
            ]
        };
    },
    methods: {
        searchInput(val) {},
        /**TODO */
        onRequest(props) {
            this.loading = true;

            // emulate server
            setTimeout(() => {
                // clear out existing data and add new
                this.data = this.original;
                this.loading = false;
            }, 500);
        }
    }
};
</script>
