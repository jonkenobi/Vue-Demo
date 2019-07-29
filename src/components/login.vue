<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    fluid
                    fill-height
            >
                <v-layout
                       justify-center
                >
                    <v-flex
                            xs12
                            sm8
                            md4
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>ログイン</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                :href="source"
                                                icon
                                                large
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-code-tags</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Source</span>
                                </v-tooltip>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                icon
                                                large
                                                href="https://codepen.io/johnjleider/pen/pMvGQO"
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-codepen</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Codepen</span>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            prepend-icon="person"
                                            type="text"
                                    ></v-text-field>

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="lock"
                                            type="password"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<!--        <p v-if="$route.query.redirect">-->
<!--            ログインしてください-->
<!--        </p>-->
<!--        {{ errorMessage }}-->
<!--        <form @submit.prevent="login">-->
<!--            <div class="field">-->
<!--                <div class="control">-->
<!--                    <label><input v-model="email" placeholder="email"></label>-->
<!--                </div>-->
<!--            </div>-->
<!--            <br>-->
<!--            <div class="field">-->
<!--                <div class="control">-->
<!--                    <label><input v-model="password" placeholder="password" type="password" solo></label>-->
<!--                </div>-->
<!--            </div>-->
<!--            <br>-->

<!--            <button type="submit" @click="login" :disabled="!isValidated">ログイン</button>-->
<!--            <p v-if="error" class="error">ログインに失敗しました</p>-->
<!--        </form>-->

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
