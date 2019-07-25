<template>
    <div>
        <v-app>
            <div class="sending" v-if="sending">Sending...</div>
            <h2>新規ユーザー作成</h2>
            <v-form v-model="valid">
                <v-container justify-center >
                    <v-layout column lg4 style="margin-right:30%;margin-left: 30%" >
                        <v-flex>
                            <v-text-field
                                    v-model="user.name"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Username"
                                    box
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex>
                            <v-textarea
                                    v-model="user.description"
                                    :rules="descriptionRules"
                                    label="Description"
                                    required
                                    box
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs4 md4>
                            <v-btn @click="createUser">送信</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </v-app>
    </div>
    <!--                <v-container>-->
    <!--                    <v-layout>-->
    <!--                        <v-flex xs12-->
    <!--                                md4>-->
    <!--                            <label>名前：</label>-->
    <!--                            <v-text-field type="text" v-model="user.name"></v-text-field>-->
    <!--                        </v-flex>-->
    <!--                        <br>-->
    <!--                        <v-flex xs12-->
    <!--                                md4>-->
    <!--                            <label>説明文：</label>-->
    <!--                            <v-textarea v-model="user.description"></v-textarea>-->
    <!--                        </v-flex>-->
    <!--                        <v-flex  xs12-->
    <!--                                 md4>-->
    <!--                            <div class="error" v-if="error">{{error}}</div>-->
    <!--                            <div>-->
    <!--                                <input type="button" @click="createUser" value="送信"></input>-->
    <!--                            </div>-->
    <!--                        </v-flex>-->
    <!--                    </v-layout>-->
    <!--                </v-container>-->
    <!--            </div>-->
    <!--        </v-form>-->

</template>

<script>
    let postUser = function (user, data, callback) {
        setTimeout(function () {
            user.id = data.length + 1
            data.push(user)
            console.log(user)
            callback(null, user)
        }, 1000)
    }
    export default {
        name: "userCreate",
        data: function () {
            return {
                valid: false,
                sending: false,
                user: this.defaultUser(),
                nameRules: [
                    v => !!v || 'Name is required'],
                descriptionRules: [
                    v => !!v || 'Description is required'],
                error: null,
            }
        },
        props: {
            usersData: {
                type: Array
            }
        },
        created: function () {
        },
        methods: {
            defaultUser: function () {
                return {
                    name: '',
                    description: ''
                }
            },
            createUser: function () {
                if (this.user.name.trim() === '') {
                    this.error = 'Name は必須です'
                    return
                }
                if (this.user.description.trim() === '') {
                    this.error = 'Description は必須です'
                    return
                }
                postUser(this.user, this.usersData, (function (err, user) {
                    this.sending = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.user = this.defaultUser()
                        alert('新規ユーザが登録されました')
                        this.$router.push('/users')
                    }
                }).bind(this))
            }
        }
    }
</script>

<style scoped>

</style>