<template>
    <div>
        <h2>ログイン</h2>
        <p v-if="$route.query.redirect">
            ログインしてください
        </p>
        <form @submit.prevent="login">
            <label><input v-model="email" placeholder="email"></label>
            <br>
            <label><input v-model="pass" placeholder="password" type="password"></label>
            <br>
            <button type="submit">ログイン</button>
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
                pass: '',
                error: false
            }
        },
        methods: {
            login: function () {
                console.log(Auth.loggedIn());
                Auth.login(this.email, this.pass, (function (loggedIn) {
                    if (!loggedIn) {
                        this.error = true
                    } else {
                        console.log('should redirect')
                        this.$router.replace(this.$route.query.redirect || '/')
                    }
                }).bind(this))

            }
        }
    }
</script>

<style scoped>

</style>