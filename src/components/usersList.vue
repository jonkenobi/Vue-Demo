<template>
    <div>
        <div class="loading" v-if="loading">読み込み中...</div>
        <div class="error" v-if="error">{{error}}</div>
        <div v-for="user in usersData" :key="user.id" style="alignment: left">
            <h2>
                <router-link :to="{path:'/user/'+user.id}">{{user.name}}</router-link>
            </h2>
        </div>
    </div>
</template>

<script>
    // let getUsers = function (callback) {
    //     setTimeout(function () {
    //         callback(null,usersData)
    //     }, 300)
    // }
    import {mapState} from "vuex";


    export default {
        name: "usersList",
        data() {
            return {
                loading: false,
                users: function () {
                    return []
                },
                error: null
            }
        },
        props:{
            'usersData':{
                type:Array
            }
        }

        // // get Data on initialization
        // created: function () {
        //     this.fetchData()
        // },
        // //by checking $route, will fetchData every time the route (URl) changes
        // watch: {
        //     '$route': 'fetchData'
        // },
        // methods: {
        //     fetchData: function () {
        //         this.loading = true
        //         getUsers((function (err, users) {
        //             this.loading = false
        //             if (err) {
        //                 this.error = error.toString()
        //             } else {
        //                 this.users = users
        //             }
        //         }).bind(this))
        //     }
        // }
    }
</script>

<style scoped>

</style>