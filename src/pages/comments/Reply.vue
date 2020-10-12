<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Reply to Comment</h6>
                <br />
                <p>Fill out the form to reply to this comment.</p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Comment Details
                </div>
                <q-item class="q-mt-sm" v-if="comment.loading">
                    <q-spinner color="white" size="2em" />
                </q-item>
                <div v-else>
                    <q-list class="detail-list" separator>
                        <q-item class="detail-field">
                            <span class="field-label">Content</span>
                            <span class="field-value">
                                {{ comment.data.text }}
                            </span>
                        </q-item>
                        <q-item class="detail-field">
                            <span class="field-label">Posted</span>
                            <span class="field-value">
                                {{ comment.data.posted }}
                            </span>
                        </q-item>
                        <q-item class="detail-field">
                            <span class="field-label">Author</span>
                            <span class="field-value">
                                {{ comment.data.author }}
                            </span>
                        </q-item>
                        <q-item class="detail-field">
                            <span class="field-label">Product</span>
                            <span class="field-value">
                                {{ comment.data.product }}
                            </span>
                        </q-item>
                    </q-list>
                </div>
            </div>
            <div class="content-2">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Reply
                </div>
                <div>
                    <q-form
                        @submit.prevent.stop="onSubmit"
                        :disabled="comment.hasError || comment.loading"
                    >
                        <q-item class="q-mt-sm" v-if="comment.loading">
                            <q-spinner color="white" size="2em" />
                        </q-item>
                        <q-list class="detail-list" separator v-else>
                            <q-item class="detail-field">
                                <span class="field-label">Reply as</span>
                                <q-input
                                    type="text"
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    placeholder="Field required. "
                                    class="field-value"
                                    v-model="comment.data.replyAuthor"
                                    lazy-rules
                                    :rules="[
                                        val => val !== null && val.trim() !== ''
                                    ]"
                                    @input="hasTyped = true"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Content</span>
                                <q-editor
                                    ref="qTxtEditor"
                                    class="field-value qtext-editor"
                                    :class="{ 'has-error': contentEmpty }"
                                    v-model="comment.data.reply"
                                    flat
                                    content-class="text-black bg-grey-3"
                                    toolbar-text-color="black"
                                    toolbar-toggle-color="yellow-8"
                                    :toolbar="[
                                        ['bold', 'italic'],
                                        ['undo', 'redo']
                                    ]"
                                    @input="hasTyped = true"
                                />
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Reply"
                                type="submit"
                                color="primary"
                                :loading="loading"
                                :disable="loading || !hasTyped"
                            >
                                <template v-slot:loading>
                                    <q-spinner-gears />
                                </template>
                            </q-btn>
                        </div>
                    </q-form>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.page-heading,
.page-contents {
    display: grid;
}
.page-contents {
    grid-template-columns: minmax(240px, 560px);
    grid-template-areas:
        "content-1"
        "content-2";
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
}
.content-1 {
    grid-area: content-1;
}
.content-2 {
    grid-area: content-2;
}
div[class*="content-"] {
    display: flex;
    flex-direction: column;
}
div[class*="content-"] > div {
    min-height: 4em;
    justify-content: left;
    margin: 1px 0;
    background: rgba(128, 128, 128, 0.65);
    width: 100%;
}
.caption-icon {
    font-size: 2.5rem;
    display: inline-flex;
}
.detail-list {
    display: flex;
    flex-direction: column;
}
.detail-field {
    align-items: center;
}
.detail-field .field-label {
    width: 140px;
}
.detail-field .field-value {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.qtext-editor {
    border: 2px solid white;
}
.has-error {
    border: 2px solid $negative;
}
@media (max-width: 400px) {
    .detail-field {
        flex-direction: column;
        align-items: flex-start;
    }
    .detail-field .field-label,
    .detail-field .field-value {
        line-height: 2em;
        width: 100%;
    }
}
</style>
<style lang="scss">
.q-field__bottom {
    display: none;
}
</style>

<script>
import HelperMixin from "../../mixins/helpers";
let Comment = null;

export default {
    preFetch({ previousRoute }) {},
    name: "ReplyComment",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Reply"
        };
    },
    beforeCreate() {
        Comment = this.$RepositoryFactory.get("comments");
    },
    created() {
        if (process.env.CLIENT) this.getComment();
    },
    mounted() {
        // this.$refs.qTxtEditor.focus();
    },
    computed: {
        contentEmpty() {
            return (
                this.hasTyped && this._isContentEmpty(this.comment.data.reply)
            );
        }
    },
    data() {
        return {
            loading: false,
            hasTyped: false,
            comment: {
                loading: true,
                hasError: false,
                data: {
                    text: "",
                    author: "",
                    product: "",
                    posted: "",
                    replyAuthor: "",
                    reply: ""
                }
            }
        };
    },
    methods: {
        _isContentEmpty(val) {
            val = this.replaceAll(val, "&nbsp;", "");
            val = this.replaceAll(val, " ", "");
            val = val.replace(/(<([^>]+)>)/gi, "").trim();

            return val.length == 0 ? true : false;
        },

        async getComment() {
            try {
                const resp = await Comment.getComment(this.$route.params.id);
                resp.replyAuthor = resp.replyAuthor
                    ? resp.replyAuthor
                    : this.$store.state.auth.name;
                this.comment.data = resp;
            } catch (err) {
                this.showNotif(false, "Could not retrieve comment details. ");
                this.comment.hasError = true;
            } finally {
                this.comment.loading = false;
            }
        },

        onSubmit: async function(evt) {
            this.loading = true;
            if (!this._isContentEmpty(this.comment.data.reply)) {
                try {
                    await Comment.replyToComment(
                        this.$route.params.id,
                        this.comment.data
                    );
                    this.showNotif(
                        true,
                        "Successfully posted reply to comment."
                    );
                    this.loading = false;
                    this.returnToPageIndex("/comments");
                } catch (err) {
                    this.showNotif(false, "Could not post reply. ");
                }
            } else {
                this.$refs.qTxtEditor.focus();
                this.loading = false;
            }
        }
    }
};
</script>
