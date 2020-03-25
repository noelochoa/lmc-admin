<template>
    <q-menu
        no-parent-event
        :value="showSearch"
        :offset="[-40, -6]"
        square
        dark
        no-focus
        content-class="bg-none no-box-shadow"
        @hide="emitClose"
    >
        <div class="row menu-arrow bg-grey-8">&nbsp;</div>
        <div class="row no-wrap bg-grey-8" v-if="filteredResults.length == 0">
            <div class="block q-pa-md">
                No results found.
            </div>
        </div>
        <div class="row no-wrap bg-grey-8" v-else>
            <q-list>
                <q-list
                    v-for="result in filteredResults"
                    :key="result.category"
                >
                    <q-item
                        dense
                        :to="result.path"
                        class="q-pt-xs "
                        active-class="text-white"
                    >
                        <q-item-section>
                            <q-item-label class="result-value">
                                {{ result.category }}
                            </q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-item-label class="text-white">
                                see all
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-for="item in result.items"
                        :key="item.title"
                        :to="item.link"
                        class="bg-grey-10 text-white result-item"
                    >
                        <q-item-section>
                            <q-item-label
                                class="text-caption text-primary result-value q-mt-xs"
                            >
                                {{ item.title }}
                            </q-item-label>
                            <q-item-label
                                v-if="item.caption"
                                class="text-caption result-value q-mb-xs"
                            >
                                <i>{{ item.caption }}</i>
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
    min-width: 200px;
    max-width: 320px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.menu-arrow {
    width: 12px;
    margin-left: 26px;
    height: 6px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
</style>
<script>
export default {
    name: "ConfirmDialog",
    props: {
        showSearch: {
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
        }
    }
};
</script>
