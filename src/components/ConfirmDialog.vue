<template>
    <q-dialog :value="showDlg" square @hide="emitClose">
        <q-card dark>
            <q-card-section class="row items-center">
                <slot name="avatar"></slot>
                <span class="q-ml-sm">
                    <slot name="message"></slot>
                </span>
            </q-card-section>
            <q-card-actions align="right">
                <slot name="actions"></slot>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
export default {
    name: "ConfirmDialog",
    props: {
        showDlg: {
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
