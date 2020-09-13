<template>
    <q-dialog :value="showDlg" seamless persistent square @hide="emitClose">
        <q-card dark class="product-dialog-content">
            <q-card-section>
                <div class="text-h6">Product Details</div>
            </q-card-section>
            <q-card-section class="row items-center" v-if="productReady">
                <slot name="product"></slot>
            </q-card-section>
            <q-card-actions align="right" v-if="productReady">
                <slot name="actions"></slot>
            </q-card-actions>

            <q-inner-loading dark :showing="dialogLoading">
                <q-spinner-tail size="50px" color="white" />
            </q-inner-loading>
        </q-card>
    </q-dialog>
</template>
<style lang="scss" scoped>
.product-dialog-content {
    min-height: 240px;
    min-width: 360px;
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
            required: true,
            default: true
        },
        productReady: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        emitClose() {
            this.$emit("update:showDlg", false);
        }
    }
};
</script>
