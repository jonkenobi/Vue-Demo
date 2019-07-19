<template>
    <div>
        <div class="sending" v-if="sending">Sending...</div>
        <div>
            <h2>新規ユーザー作成</h2>
            <div>
                <label>名前：</label>
                <input type="text" v-model="user.name">
            </div>
            <div>
                <label>説明文：</label>
                <textarea v-model="user.description"></textarea>
            </div>
            <div class="error" v-if="error">{{error}}</div>
            <div>
                <input type="button" @click="createUser" value="送信"></input>
            </div>
        </div>
    </div>
</template>

<script>
    // import dt from './usersData';
    // let usersData = dt.getData();

    let postUser = function (user,data, callback) {
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
                sending: false,
                user: this.defaultUser(),
                error: null
            }
        },
        props:{
            usersData:{
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
                postUser(this.user, this.usersData, (function (err,user) {
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