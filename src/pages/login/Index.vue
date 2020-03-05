<template>
    <q-page class="flex flex-center">
        <div class="blur-bg"></div>
        <div class="round-fg">
            <q-form @submit="onSubmit" @reset="onReset">
                <q-input
                    class="q-pa-md"
                    filled
                    v-model="email"
                    type="email"
                    label="Your email *"
                    lazy-rules
                    :rules="[
                        val =>
                            (val && val.length > 0) || 'Please type your email',
                        isValidEmail
                    ]"
                >
                    <template v-slot:prepend>
                        <q-icon name="mail_outline" />
                    </template>
                </q-input>

                <q-input
                    class="q-pa-md"
                    filled
                    type="password"
                    v-model="password"
                    label="Your password *"
                    lazy-rules
                    :rules="[
                        val =>
                            (val !== null && val !== '') ||
                            'Please type your password',
                        val =>
                            val.length >= 6 ||
                            'Password should have 6 or more characters'
                    ]"
                >
                    <template v-slot:prepend>
                        <q-icon name="security" />
                    </template>
                </q-input>

                <div class="q-pa-md">
                    <q-btn label="Submit" type="submit" color="primary" />
                    <q-btn
                        label="Reset"
                        type="reset"
                        color="white"
                        flat
                        class="q-ml-sm"
                    />
                </div>
            </q-form>
            <div class="message q-pa-md">
                <h5 class="text-center">Welcome to the Admin Portal!</h5>
                <p class="text-center">
                    Please enter your login credentials to continue.
                </p>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.blur-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    background: $primary;
    background: linear-gradient(
        60deg,
        $primary 0%,
        $secondary 45%,
        $tertiary 100%
    );

    /* Add the blur effect */
    filter: blur(0.8);
    -webkit-filter: blur(0.8);
}

.round-fg {
    width: 80%;
    max-width: 800px;
    height: 240px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "form message";
    grid-column-gap: 1rem;
}

.q-form {
    grid-area: form;
    background: rgba(240, 240, 240, 0.25);
    border-radius: 10px 0;
}

.message {
    grid-area: message;
    position: relative;
    color: #fff;
}
</style>

<script>
export default {
    name: "LoginIndex",
    preFetch({ store }) {},
    created() {},
    data() {
        return {
            email: "",
            password: "",
            authenthicated: ""
        };
    },
    methods: {
        onSubmit: function() {},
        onReset: function() {
            this.email = this.password = "";
        },
        isValidEmail(val) {
            const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || "Invalid email format";
        }
    }
};
</script>
