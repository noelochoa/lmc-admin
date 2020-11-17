<template>
    <q-menu
        no-parent-event
        :value="showSearch"
        :offset="[-40, -6]"
        square
        dark
        no-focus
        max-height="480px"
        content-class="bg-none no-box-shadow"
        @hide="emitClose"
    >
        <div class="row menu-arrow bg-grey-8">
            &nbsp;
        </div>
        <div class="row no-wrap bg-grey-8" v-if="!resReady">
            <div class="block q-pa-md">
                Searching... <q-spinner color="white" size="1em" />
            </div>
        </div>
        <div
            class="row no-wrap bg-grey-8"
            v-else-if="filteredResults.length == 0"
        >
            <div class="block q-pa-md">
                No results found.
            </div>
        </div>
        <div class="row no-wrap bg-grey-8" v-else>
            <q-list>
                <q-list
                    v-for="(result, idx) in filteredResults"
                    :key="'key-' + idx"
                >
                    <q-item dense class="q-pt-xs" active-class="text-white">
                        <q-item-section>
                            <q-item-label class="result-value">
                                {{ result.category }}
                            </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-btn
                                size="sm"
                                flat
                                dense
                                class="text-primary"
                                :to="result.path"
                            >
                                see all
                            </q-btn>
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-for="(item, iidx) in result.items"
                        :key="'item-' + iidx"
                        :to="item.link"
                        class="bg-grey-10 text-white result-item"
                    >
                        <q-item-section>
                            <q-item-label
                                class="text-caption result-value q-mt-xs"
                                v-html="markText(item.title)"
                            >
                            </q-item-label>
                            <q-item-label
                                v-if="item.caption"
                                class="text-caption result-value capitalize q-mb-xs"
                            >
                                <i v-html="markText(item.caption)"></i>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-list>
        </div>
    </q-menu>
</template>
<style lang="scss" scoped>
.result-item {
    border-bottom: 1px solid $grey-8;
}
.result-item:last-child {
    border-bottom: 0;
}
.result-value {
    width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.menu-arrow {
    width: 12px;
    margin-left: 26px;
    height: 8px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
<script>
export default {
    name: "ConfirmDialog",
    props: {
        searchText: {
            type: String,
            required: true,
            default: ""
        },
        showSearch: {
            type: Boolean,
            required: true,
            default: false
        },
        resReady: {
            type: Boolean,
            required: true,
            default: false
        },
        searchResults: {
            type: Array,
            required: true,
            default() {}
        }
    },
    computed: {
        filteredResults() {
            return this.searchResults.filter(item => {
                return item.items && item.items.length > 0;
            });
        }
    },

    methods: {
        emitClose() {
            this.$emit("update:searchFocused", false);
        },
        markText(str) {
            if (str && this.searchText) {
                return str.replace(
                    new RegExp(`(${this.searchText})`, "i"),
                    `<span class='highlighted'>$1</span>`
                );
            }

            return str;
        }
    }
};
</script>
