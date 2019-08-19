<template>
    <div>
        <div class="loading" v-if="loading">読み込み中...</div>
        <div class="error" v-if="error">{{error}}</div>
        <div v-for="user in usersData" :key="user.id" style="alignment: left">
            <h2>
                <router-link :to="{path:'/user/'+user.id}">{{user.name}}</router-link>
            </h2>
        </div>
        <Registration-btn :is-disabled="!canDoTemporaryRegistration" v-on:action="OfficialBondRegistration">
            <template #buttonText>仮登録</template>
            <template #text>入力内容を仮登録しますか？</template>
            <template #afterConfirmationMsg>社債情報が仮登録されました！</template>
            <template #afterConfirmationBtn></template>
        </Registration-btn>
        <br>

        <Registration-btn :is-disabled="!canDoOfficialRegistration">
            <template #buttonText>本登録</template>
            <template #text><p>入力内容を本登録しますか？</p></template>
            <template #afterConfirmationBtn>Ok</template>
        </Registration-btn>
    </div>
</template>

<script>
    import RegistrationBtn from '@/components/templates/RegistrationButton'

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
        components:{RegistrationBtn},
        props:{
            'usersData':{
                type:Array
            }
        },
        computed: {
            canDoTemporaryRegistration: function () {
                return true
            },
            canDoOfficialRegistration: function () {
                return false
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