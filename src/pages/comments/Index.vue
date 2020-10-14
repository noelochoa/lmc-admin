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
                                        :icon="
                                            props.row.flagged
                                                ? 'flag'
                                                : 'outlined_flag'
                                        "
                                        @click="
                                            confirmAction(
                                                props.row.id,
                                                !props.row.flagged
                                            )
                                        "
                                        ><q-tooltip
                                            anchor="bottom right"
                                            self="top middle"
                                            :offset="[10, 10]"
                                        >
                                            {{
                                                props.row.flagged
                                                    ? "Unflag"
                                                    : "Flag"
                                            }}
                                            comment
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
                    <template v-slot:message v-if="targetFlagVal">
                        This action will mark this comment as <u>FLAGGED</u>.
                        <br />
                        Comment will no longer be visible in the product page.
                    </template>
                    <template v-slot:message v-else>
                        This action will <u>UNFLAG</u> this comment. <br />
                        Comment will be visible again in the product page.
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
    grid-template-areas: "heading-caption";
    grid-column-gap: 1rem;
}
.heading-caption {
    grid-area: heading-caption;
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
@media (min-width: 1820px) {
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
.comments-table {
    background: rgba(128, 128, 128, 0.35);
    color: #fff;
}
</style>
<script>
import ConfirmDialog from "../../components/ConfirmDialog";
import HelperMixin from "../../mixins/helpers";
let Comment = null;

export default {
    name: "CommentIndex",
    components: { ConfirmDialog },
    mixins: [HelperMixin],

    meta() {
        return {
            title: "Product Comments"
        };
    },
    beforeCreate() {
        Comment = this.$RepositoryFactory.get("comments");
    },
    created() {
        if (this.$route.query.s) {
            this.search = this.$route.query.s;
        }
        if (this.$route.query.p && !isNaN(this.$route.query.p)) {
            this.pagination.page = this.$route.query.p;
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
            toFlagID: -1,
            targetFlagVal: false,
            pagination: {
                sortBy: "posted",
                descending: true,
                page: 1,
                rowsPerPage: 9
            },
            columns: [
                {
                    name: "text",
                    field: "text",
                    label: "Text",
                    align: "left",
                    required: true,
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
            original: []
        };
    },
    methods: {
        searchClear(evt) {
            this.search = "";
            this.$router.replace("/comments").catch(err => {});
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
                const resp = await Comment.getComments();
                this.original = resp;
                this.data = this.original.slice();
            } catch (err) {
                this.showNotif(false, "Could not retrieve comments. ");
            } finally {
                this.loading = false;
            }
        },
        confirmAction(commentID, bool) {
            this.showDlg = true;
            this.toFlagID = commentID;
            this.targetFlagVal = bool;
        },

        async onProceed() {
            if (this.toFlagID !== -1) {
                try {
                    // Toggle flag comment
                    const resp = await Comment.flagComment(
                        this.toFlagID,
                        this.targetFlagVal
                    );

                    this.showNotif(
                        true,
                        this.targetFlagVal
                            ? "Comment has been FLAGGED."
                            : "Comment has been UNFLAGGED."
                    );
                    // Update
                    this.data.forEach(el => {
                        if (el.id === this.toFlagID) {
                            el.flagged = this.targetFlagVal;
                        }
                    });
                    // Reset
                    this.toFlagID = -1;
                    this.targetFlagVal = false;
                } catch (err) {
                    this.showNotif(false, "Could not update item. ");
                }
            }
        }
    }
};
</script>
