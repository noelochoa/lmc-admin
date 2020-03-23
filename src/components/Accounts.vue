<template>
    <q-item clickable v-ripple :to="'/accounts/edit/' + id">
        <q-item-section side>
            <q-avatar size="32px" color="primary">
                {{ name_avatar }}
                <!-- <q-badge floating color="teal">new</q-badge> -->
            </q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ name }}</q-item-label>
            <q-item-label
                v-if="joined_format.length > 0"
                caption
                class="text-primary font-small"
                >{{ joined_format }}</q-item-label
            >
        </q-item-section>
        <q-item-section side caption class="text-white">Review</q-item-section>
    </q-item>
</template>
<style lang="scss" scoped>
.q-item__label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: inherit;
}
.font-small {
    font-size: 11px;
}
</style>
<script>
export default {
    name: "Accounts",
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        joined: {
            type: String,
            default: new Date()
        }
    },
    computed: {
        name_avatar() {
            return this.name ? this.name.slice(0, 1).toUpperCase() : "";
        },
        joined_format() {
            if (!this.joined) return "";

            const options = {
                weekday: "short",
                month: "short",
                day: "numeric"
            };
            const dt = new Date(this.joined);
            return "joined " + dt.toLocaleDateString("en-US", options);
        }
    }
};
</script>
