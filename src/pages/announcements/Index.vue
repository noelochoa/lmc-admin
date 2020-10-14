<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Store Announcements</h6>
                <br />
                <p>
                    The following is a list web store announcements. <br />
                    Note: Only the latest entry will be visible on the Store if
                    there are overlapping dates.
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
                <q-btn
                    flat
                    round
                    icon="post_add"
                    class="q-mr-sm"
                    to="/announcements/add"
                >
                    <q-tooltip
                        anchor="bottom right"
                        self="top middle"
                        :offset="[10, 10]"
                        >Add Announcement</q-tooltip
                    >
                </q-btn>
                <q-input
                    class="filter-search-box"
                    v-model="search"
                    type="search"
                    placeholder="Search text"
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
                                @click="searchClear"
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
                    :filter="search"
                    :loading="loading"
                    @request="onRequest"
                    @update:pagination="onChgPage"
                >
                    <template v-slot:item="props">
                        <div
                            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-4"
                        >
                            <q-card class="bg-gray-alpha-2">
                                <q-card-section>
                                    {{ props.row.message }}
                                </q-card-section>
                                <q-separator />
                                <q-list dense>
                                    <q-item
                                        v-for="col in props.cols.filter(
                                            col => col.name !== 'message'
                                        )"
                                        :key="col.name"
                                    >
                                        <q-item-section>
                                            <q-item-label>
                                                {{ col.label }}
                                            </q-item-label>
                                        </q-item-section>
                                        <q-item-section side>
                                            <q-item-label class="text-primary">
                                                {{ col.value }}
                                            </q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </q-list>
                                <q-separator />
                                <q-card-actions align="right">
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="build"
                                        :to="
                                            '/announcements/edit/' +
                                                props.row.id
                                        "
                                    >
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Edit Announcement
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="delete"
                                        @click="confirmDel(props.row.id)"
                                        ><q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Delete Announcement
                                        </q-tooltip>
                                    </q-btn>
                                </q-card-actions>
                            </q-card>
                        </div>
                    </template>
                </q-table>
                <ConfirmDialog :showDlg.sync="showDlg">
                    <template v-slot:avatar>
                        <q-avatar
                            icon="delete_forever"
                            color="red-5"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message>
                        Continue on removing this announcement?<br />
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "content-1 . . ."
        "content-2 content-2 content-2 content-2";
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
}
.q-card__section {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
}
.filter-search-box {
    min-width: 237px;
    width: 100%;
}
@media (max-width: 360px) {
    .page-heading {
        grid-template-columns: 1fr;
        grid-template-areas:
            "heading-caption"
            "heading-stat-1";
    }
}
@media (min-width: 1820px) {
    .page-heading {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas: "heading-caption heading-caption heading-stat-1 .";
    }
    .page-contents {
        grid-template-columns: repeat(4, 494px);
        grid-template-areas:
            "content-1 . . . "
            "content-2 content-2 content-2 .";
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
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
let Psa = null;

export default {
    name: "AnnoucementIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    meta() {
        return {
            title: "Store Announcements"
        };
    },
    beforeCreate() {
        Psa = this.$RepositoryFactory.get("announcements");
    },
    created() {
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
        }
        if (this.$route.query.p && !isNaN(this.$route.query.p)) {
            this.pagination.page = Number.parseInt(this.$route.query.p);
        }
    },
    mounted() {
        this.onRequest({
            pagination: this.pagination,
            filter: undefined
        });
    },
    data() {
        return {
            announcementList: [],
            search: "",
            searchReq: null,
            loading: false,
            showDlg: false,
            toDelID: -1,
            pagination: {
                sortBy: "start",
                descending: true,
                page: 1,
                rowsPerPage: 9
            },
            columns: [
                {
                    name: "message",
                    field: "message",
                    label: "Message",
                    sortable: true,
                    required: true
                },
                {
                    name: "start",
                    field: "start",
                    label: "Start",
                    sortable: true
                },
                {
                    name: "end",
                    field: "end",
                    label: "End",
                    sortable: true
                }
            ],
            data: [],
            original: []
        };
    },
    methods: {
        searchClear(evt) {
            let query = Object.assign({}, this.$route.query);
            delete query.s;
            this.$router.replace({ query }).catch(err => {});
            this.search = "";
        },
        searchInput(val) {
            let searchQry = Object.assign({}, this.$route.query, { s: val });
            if (!val) delete searchQry.s;

            this.$router
                .replace({
                    query: searchQry
                })
                .catch(err => {});
        },

        onChgPage(newPg) {
            let pageQry = Object.assign({}, this.$route.query, {
                p: newPg.page
            });
            if (!newPg) delete pageQry.p;

            this.$router
                .replace({
                    query: pageQry
                })
                .catch(err => {});
        },

        async onRequest(props) {
            this.loading = true;
            try {
                const resp = await Psa.getAllAnnouncements();
                this.original = resp;
                this.data = this.original.slice();
            } catch (err) {
                this.showNotif(
                    false,
                    "Could not retrieve announcement details. "
                );
            } finally {
                this.loading = false;
            }
        },

        async onRemove() {
            if (this.toDelID !== -1) {
                try {
                    const resp = await Psa.deleteAnnouncement(this.toDelID);
                    this.showNotif(true, "Successfully removed announcement.");

                    // Remove from list and Reset
                    this.$delete(
                        this.data,
                        this.data.findIndex(el => el.id == this.toDelID)
                    );
                    this.toDelID = -1;
                } catch (err) {
                    this.showNotif(false, "Could not delete item. ");
                }
            }
        },

        confirmDel(psaID) {
            this.showDlg = true;
            this.toDelID = psaID;
        }
    }
};
</script>
