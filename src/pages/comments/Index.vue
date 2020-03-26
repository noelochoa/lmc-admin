<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Comments</h6>
                <br />
                <p>The following are product comments posted by customers.</p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <q-input
                    class="filter-search-box"
                    v-model="search"
                    type="search"
                    placeholder="Search product"
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
                    class="comments-table"
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
                            class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-4"
                        >
                            <q-card class="bg-gray-alpha-2">
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
                                <q-card-actions align="right">
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="reply"
                                        :to="'/comments/reply/' + props.row.id"
                                    >
                                        <q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Reply to comment
                                        </q-tooltip>
                                    </q-btn>
                                    <q-btn
                                        dense
                                        flat
                                        round
                                        icon="report_problem"
                                        @click="confirmAction(props.row.id)"
                                        ><q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                            >Flag comment
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
                            icon="report_problem"
                            color="red-5"
                            text-color="white"
                        />
                    </template>
                    <template v-slot:message>
                        This action will mark this comment as flagged. <br />
                        Comment will no longer be visible in the product page.
                    </template>
                    <template v-slot:actions>
                        <q-btn flat label="Cancel" v-close-popup />
                        <q-btn
                            flat
                            label="Proceed"
                            color="red-5"
                            @click="onProceed"
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
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: "heading-caption";
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
    width: 90%;
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
.comments-table {
    background: rgba(128, 128, 128, 0.25);
    color: #fff;
}
</style>
<script>
import ConfirmDialog from "../../components/ConfirmDialog";
import HelperMixin from "../../mixins/helpers";

export default {
    name: "CommentIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    preFetch({ store }) {
        console.log("prefetch called");
    },
    meta() {
        return {
            title: "Product Comments"
        };
    },
    created() {
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
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
            nameFilter: "",
            loading: false,
            showDlg: false,
            toFlagID: -1,
            pagination: {
                sortBy: "posted",
                descending: true,
                page: 1,
                rowsPerPage: 10
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
                    name: "posted",
                    field: "posted",
                    align: "left",
                    label: "Posted",
                    sortable: true
                },
                {
                    name: "product",
                    field: "product",
                    align: "left",
                    label: "Product",
                    sortable: true
                },
                {
                    name: "author",
                    field: "author",
                    align: "left",
                    label: "Author",
                    sortable: true
                }
            ],
            data: [],
            original: [
                {
                    id: 1,
                    text:
                        "This is a long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    author: "User 1234 567",
                    product: "Product Name 123",
                    posted: "April 4, 2020"
                },
                {
                    id: 2,
                    text: "This is a short comment",
                    author: "User 1234 567",
                    product: "Product Name 123",
                    posted: "Mar 4, 2020"
                },
                {
                    id: 3,
                    text: "This is a short comment 2",
                    author: "User 1234 567",
                    product: "Product Name 123",
                    posted: "Feb 4, 2020"
                },
                {
                    id: 4,
                    text: "This is a short comment 3",
                    author: "User 1234 567",
                    product: "Product Name 123",
                    posted: "April 4, 2020"
                }
            ]
        };
    },
    methods: {
        searchClear(evt) {
            this.search = "";
            /** TODO */
            this.$router.replace("/comments").catch(err => {});
        },
        searchInput(val) {
            /** TODO */
            let searchQry = Object.assign({}, this.$route.query, { s: val });
            if (!val) delete searchQry.s;

            this.$router
                .replace({
                    query: searchQry
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
        confirmAction(commentID) {
            this.showDlg = true;
            this.toFlagID = commentID;
        },
        onProceed() {
            if (this.toFlagID !== -1) {
                /**TODO */
                this.showNotif(true, "Successfully flagged comment.");
            }
            // Reset
            this.toFlagID = -1;
        }
    }
};
</script>
