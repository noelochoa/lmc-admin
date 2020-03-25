<template>
    <q-list class="bg-none relative-position">
        <transition-group name="slide" tag="div">
            <div
                v-for="item in data"
                :key="item.id"
                name="2020-03-21"
                class="holiday-item-container bg-gray-alpha no-scroll q-pa-md q-mb-xs"
            >
                <div class="text-subtitle2 q-mb-md holiday-item">
                    <div class="reason">
                        {{ item.reason }}
                    </div>
                    <div>
                        <slot name="actions" :item="item"></slot>
                    </div>
                </div>
                <q-item class="detail-field" dense>
                    <span class="field-label"> Start</span>
                    <span class="text-primary field-value">
                        {{ humanReadableDt(item.start) }}
                    </span>
                </q-item>
                <q-item class="detail-field" dense>
                    <span class="field-label"> End</span>
                    <span class="text-primary field-value">
                        {{ humanReadableDt(item.end) }}
                    </span>
                </q-item>
            </div>
        </transition-group>
    </q-list>
</template>
<style lang="scss" scoped>
.detail-field {
    flex-direction: row;
    padding-left: 0 !important;
}
.detail-field .field-label {
    width: 50px;
}
.detail-field .field-value {
    flex: 1;
}
.holiday-item-container {
    width: 100%;
    max-width: 300px;
}
.holiday-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.reason {
    overflow: auto;
    overflow-wrap: break-word;
    hyphens: auto;
    flex: 1 1 auto;
}
</style>
<script>
import HelperMixin from "../mixins/helpers";
export default {
    name: "Holidays",
    mixins: [HelperMixin],
    props: {
        date: {
            type: String,
            required: true
        },
        data: {
            type: Array,
            required: true,
            default() {}
        }
    },
    methods: {
        humanReadableDt(val) {
            return this.toHumanReadableDt(val);
        }
    }
};
</script>
