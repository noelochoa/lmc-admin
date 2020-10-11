<template>
    <q-page class="q-px-md q-pt-lg">
        <div class="page-heading text-white q-pa-md">
            <div class="heading-caption">
                <h6>Edit Announcement</h6>
                <br />
                <p>You may edit the details of this announcement.</p>
            </div>
        </div>
        <div class="page-contents text-white q-pa-md">
            <div class="content-1">
                <div class="text-subtitle2 flex flex-center">
                    <q-icon
                        name="account_circle"
                        class="caption-icon q-mx-md"
                    />Announcement Info
                </div>
                <div>
                    <q-form
                        @submit.prevent.stop="onSubmit"
                        :disabled="
                            announcement.hasError || announcement.loading
                        "
                    >
                        <q-item class="q-mt-sm" v-if="announcement.loading">
                            <q-spinner color="white" size="2em" />
                        </q-item>
                        <q-list class="detail-list" separator v-else>
                            <q-item class="detail-field">
                                <span class="field-label">Starts from</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    class="field-value"
                                    v-model="announcement.data.start"
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        _isValidDatetime
                                    ]"
                                >
                                    <template v-slot:prepend>
                                        <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qDateProxyS"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-date
                                                    dark
                                                    no-unset
                                                    v-model="
                                                        announcement.data.start
                                                    "
                                                    mask="YYYY-MM-DD HH:mm"
                                                    @input="
                                                        () =>
                                                            $refs.qDateProxyS.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>

                                    <template v-slot:append>
                                        <q-icon
                                            name="access_time"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qTimeProxyS"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-time
                                                    dark
                                                    v-model="
                                                        announcement.data.start
                                                    "
                                                    mask="YYYY-MM-DD HH:mm"
                                                    format24h
                                                    @input="
                                                        () =>
                                                            $refs.qTimeProxyS.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Ends at</span>
                                <q-input
                                    dense
                                    outlined
                                    hide-bottom-space
                                    dark
                                    class="field-value"
                                    v-model="announcement.data.end"
                                    lazy-rules
                                    :rules="[
                                        val =>
                                            val !== null && val.trim() !== '',
                                        _isValidDatetime,
                                        _isValidEndDt
                                    ]"
                                >
                                    <template v-slot:prepend>
                                        <q-icon
                                            name="event"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qDateProxyE"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-date
                                                    dark
                                                    no-unset
                                                    v-model="
                                                        announcement.data.end
                                                    "
                                                    mask="YYYY-MM-DD HH:mm"
                                                    @input="
                                                        () =>
                                                            $refs.qDateProxyE.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>

                                    <template v-slot:append>
                                        <q-icon
                                            name="access_time"
                                            class="cursor-pointer"
                                        >
                                            <q-popup-proxy
                                                ref="qTimeProxyE"
                                                transition-show="scale"
                                                transition-hide="scale"
                                            >
                                                <q-time
                                                    dark
                                                    v-model="
                                                        announcement.data.end
                                                    "
                                                    mask="YYYY-MM-DD HH:mm"
                                                    format24h
                                                    @input="
                                                        () =>
                                                            $refs.qTimeProxyE.hide()
                                                    "
                                                />
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Text</span>
                                <q-editor
                                    placeholder="Announcement text"
                                    ref="qTxtEditor"
                                    class="field-value qtext-editor"
                                    :class="{ 'has-error': contentEmpty }"
                                    v-model="announcement.data.message"
                                    flat
                                    content-class="text-black bg-grey-3"
                                    toolbar-text-color="black"
                                    toolbar-toggle-color="yellow-8"
                                    :toolbar="[
                                        ['bold', 'italic', 'underline'],
                                        ['undo', 'redo']
                                    ]"
                                    @input="hasTyped = true"
                                />
                            </q-item>
                            <q-item class="detail-field">
                                <span class="field-label">Link</span>
                                <q-input
                                    dense
                                    outlined
                                    dark
                                    hide-bottom-space
                                    placeholder="Optional URL"
                                    class="field-value"
                                    v-model="announcement.data.targetLink"
                                    lazy-rules
                                    :rules="[_isValidLink]"
                                />
                            </q-item>
                        </q-list>
                        <q-separator />
                        <div class="q-pa-md">
                            <q-btn
                                label="Save"
                                type="submit"
                                color="primary"
                                :loading="loading"
                                :disable="loading"
                            >
                                <template v-slot:loading>
                                    <q-spinner-gears />
                                </template>
                            </q-btn>
                        </div>
                    </q-form>
                </div>
            </div>
            <div class="content-2"></div>
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
    max-width: 388px;
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
let Psa = null;

export default {
    name: "AnnouncementEdit",
    mixins: [HelperMixin],
    meta() {
        return {
            title: "Edit Announcement"
        };
    },
    mounted() {
        // this.$refs.qTxtEditor.focus();
    },
    beforeCreate() {
        Psa = this.$RepositoryFactory.get("announcements");
    },
    created() {
        if (process.env.CLIENT) this.getAnnouncement();
    },
    computed: {
        contentEmpty() {
            return (
                this.hasTyped &&
                this._isContentEmpty(this.announcement.data.message)
            );
        }
    },
    data() {
        return {
            loading: false,
            hasTyped: false,
            announcement: {
                loading: true,
                hasError: false,
                data: {
                    message: "",
                    targetLink: "",
                    start: "",
                    end: ""
                }
            }
        };
    },
    methods: {
        _isValidDatetime(val) {
            const dtpattern = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (0?[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/g;
            return dtpattern.test(val) || "Invalid date & time format";
        },
        _isValidEndDt(val) {
            const end = new Date(val);
            const start = new Date(this.announcement.data.start);

            console.log(end, start);
            return (
                end.getTime() > start.getTime() ||
                "End date needs to be greater"
            );
        },
        _isValidLink(val) {
            if (!val || val == "") return true;

            const urlpattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            //const urlpattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
            return urlpattern.test(val) || "Invalid URL format";
        },

        _isContentEmpty(val) {
            if (!val) return true;
            val = this.replaceAll(val, "&nbsp;", "");
            val = this.replaceAll(val, " ", "");
            val = val.replace(/(<([^>]+)>)/gi, "").trim();

            return val.length == 0 ? true : false;
        },

        async getAnnouncement() {
            try {
                const resp = await Psa.getAnnouncement(this.$route.params.id);
                this.announcement = resp;
            } catch (err) {
                this.showNotif(false, "Could retrieve announcement details. ");
                this.announcement.hasError = true;
            } finally {
                this.announcement.loading = false;
            }
        },

        onSubmit: async function(evt) {
            this.loading = true;
            if (!this._isContentEmpty(this.announcement.data.message)) {
                try {
                    await Psa.editAnnouncement(
                        this.$route.params.id,
                        this.announcement.data
                    );
                    this.showNotif(
                        true,
                        "Successfully edited the announcement. "
                    );
                    this.loading = false;
                    this.returnToPageIndex("/announcements");
                } catch (err) {
                    this.showNotif(false, "Could not edit the announcement. ");
                }
            } else {
                this.$refs.qTxtEditor.focus();
            }

            this.loading = false;
        }
    }
};
</script>
