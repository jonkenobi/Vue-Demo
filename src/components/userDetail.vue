<template>
    <div>
        <div class="loading" v-if="loading">読み込み中...</div>
        <div class="error" v-if="error">{{error}}</div>
        <div v-if="user">
            <h2>{{user.name}}</h2>
            <p>{{user.description}}</p>
        </div>
        <!--        UserId {{$route.params.userId}}'s info-->
    </div>
</template>

<script>
      let getUser = function (userId,usersData, callback) {
        setTimeout(function () {
            let filteredUsers = usersData.filter(function (user) {
                return user.id === parseInt(userId, 10)
            })
            callback(null, filteredUsers && filteredUsers[0])
        }, 1000)
    }
    export default {
        name: "userDetails",
        data: function () {
            return {
                loading: false,
                user: null,
                error: null
            }
        },
        props:{
            usersData:{
                type: Array
            }
        },
        created: function () {
            this.fetchData()
        },
        //by checking $route, will fetchData every time the route (URl) changes
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData: function () {
                this.loading = true
                getUser(this.$route.params.userId,this.usersData, (function (err, user) {
                    this.loading = false
                    if (err) {
                        this.err = error.toString()
                    } else {
                        this.user = user
                    }
                }).bind(this))
            }
        }
    }
</script>

<style scoped>

</style>