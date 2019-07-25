<template>
    <div>
        <h2>ログイン</h2>
        <p v-if="$route.query.redirect">
            ログインしてください
        </p>
        {{ errorMessage }}
        <form @submit.prevent="login">
            <div class="field">
                <div class="control">
                    <label><input v-model="email" placeholder="email"></label>
                </div>
            </div>
            <br>
            <div class="field">
                <div class="control">
                    <label><input v-model="password" placeholder="password" type="password" solo></label>
                </div>
            </div>
            <br>

            <button type="submit" @click="login" :disabled="!isValidated">ログイン</button>
            <p v-if="error" class="error">ログインに失敗しました</p>
        </form>
    </div>
</template>

<script>
    import Auth from '../services/Authentication'

    export default {
        name: "loginPage",
        data() {
            return {
                email: 'vue@example.com',
                password: '',
                error: false
            }
        },
        methods: {
            login() {
                this.$store.dispatch(
                    'auth/create',
                    {
                        'user': {
                            email: this.email,
                            password: this.password
                        }
                    }
                )
            }
        },
        computed: {
            isValidated() {
                return Object.keys(this.fields).every(k => this.fields[k].validated) &&
                    Object.keys(this.fields).every(k => this.fields[k].valid)
            },
            token() {
                return this.$store.state.auth.token
            },
            errorMessage() {
                return this.$store.state.message.error
            }
        },
        created: function () {
            this.$store.dispatch('message/destroy')
            // already logined
            if (this.$store.state.auth.token) {
                this.$router.push('/')
            }
        },
        watch: {
            token(newToken) {
                this.$router.push('/')
            }
        }


    }
</script>

<style scoped>

</style>

// login: function () {
//     console.log(Auth.loggedIn());
//     Auth.login(this.email, this.password, (function (loggedIn) {
//         if (!loggedIn) {
//             this.error = true
//         } else {
//             console.log('should redirect')
//             this.$router.replace(this.$route.query.redirect || '/')
//         }
//     }).bind(this))
