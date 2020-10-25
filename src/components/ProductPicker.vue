<template>
    <q-dialog :value="showDlg" seamless persistent square @hide="emitClose">
        <q-card dark class="product-dialog-content">
            <q-card-section>
                <div class="text-h6">Select Product</div>
            </q-card-section>
            <q-card-section v-if="productReady">
                <slot name="product"></slot>
            </q-card-section>
            <q-inner-loading dark :showing="dialogLoading">
                <q-spinner-tail size="50px" color="white" />
            </q-inner-loading>

            <q-card-actions align="right" v-if="productReady">
                <slot name="actions"></slot>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
<style lang="scss" scoped>
.product-dialog-content {
    min-height: 240px;
    width: 420px;
}
</style>
<script>
export default {
    name: "ProductPicker",
    props: {
        showDlg: {
            type: Boolean,
            required: true,
            default: false
        },
        dialogLoading: {
            type: Boolean,
            default: false
        },
        productReady: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        emitClose() {
            this.$emit("update:showDlg", false);
        }
    }
};
</script>
