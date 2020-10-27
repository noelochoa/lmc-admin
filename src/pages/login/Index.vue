<template>
    <q-page class="flex flex-center">
        <div class="blur-bg"></div>
        <div class="round-fg">
            <q-form @submit="onSubmit" @reset="onReset">
                <h3 class="q-pa-md q-mt-xl text-center text-white">Sign In</h3>
                <q-input
                    v-model="email"
                    class="q-pa-md"
                    filled
                    color="black"
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
                    v-model="password"
                    class="q-pa-md"
                    filled
                    color="black"
                    type="password"
                    autocomplete="on"
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
                <br />
                <div class="q-pa-md">
                    <q-btn
                        label="Submit"
                        type="submit"
                        :loading="loading"
                        color="primary"
                    >
                        <template v-slot:loading>
                            <q-spinner-gears />
                        </template>
                    </q-btn>
                    <q-btn
                        label="Reset"
                        type="reset"
                        color="white"
                        flat
                        class="q-ml-sm"
                    />
                </div>

                <div class="q-pa-md inline-block text-negative">
                    {{ error }}
                </div>
            </q-form>
            <div class="message q-pa-md text-center">
                <p class="q-pt-lg">
                    <q-icon class="cms-icon" name="cake" />
                </p>
                <br />
                <h5>Welcome, Admin!</h5>
                <br />
                <p>Sign in to your admin account to continue.</p>
            </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.round-fg {
    height: 50vh;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas: "message form";
    grid-column-gap: 1rem;
}

.q-form {
    grid-area: form;
    background: rgba(240, 240, 240, 0.35);
    border-radius: 10px;
}

.message {
    grid-area: message;
    position: relative;
    color: #fff;
}

.cms-icon {
    font-size: 15rem;
}

@media (max-width: 800px) {
    .message {
        display: none;
    }
    .round-fg {
        grid-template-areas: "form";
        grid-template-columns: 1fr;
        width: 75%;
    }
}
</style>

<script>
export default {
    name: "LoginIndex",
    preFetch({ store, redirect }) {
        if (store.getters["auth/isAuthenticated"]) {
            redirect("/");
        }
    },
    created() {},
    data() {
        return {
            email: "noelochoa@gmail.com",
            password: "",
            error: "",
            loading: false
        };
    },
    methods: {
        async onSubmit() {
            this.error = "";
            this.loading = true;
            const data = {
                email: this.email,
                password: this.password
            };
            try {
                await this.$store.dispatch("auth/signin", data);
                this.$router.push("/").catch(err => {});
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },
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
