<template>
    <h2 class="accountInfo">
        ホームページ{{CurrentBalance}}
    </h2>

</template>

<script>
    export default {
        name: 'accountInfo',
        props:{
            'CurrentBalance':{
                type:Number
            }
        }

    }
</script>

<style scoped>

</style>