<template>
    <div id="ProductList" class="container-fluid">

        <h2 id="title">
            {{title}}
        </h2>
        <!--        <div id="dynamic-product-categories">-->
        <!--            <button-->
        <!--                    v-for="tab in tabs"-->
        <!--                    :key="tab"-->
        <!--                    :class="['tab-button', { active: currentTab === tab }]"-->
        <!--                    @click="currentTab = tab"-->
        <!--            >{{ tab }}-->
        <!--            </button>-->

        <!--            <component-->
        <!--                    v-bind:is="currentTabComponent"-->
        <!--                    class="tab"-->
        <!--            ></component>-->
        <!--        </div>-->
        <div>
            <div id="searchbar">
                Search <input type="text">
                <scan style="float:right"> 残高:10000
                    <button style="margin: 0 0 4px 4px">チャージ</button>
                </scan>
            </div>

            <table id="products" :style="errorMsgStyle">
                <thead>
                <tr>
                    <th v-for="header in headers">
                        {{header.text}}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="food in foods" :key="food.id">
                    <td>{{food.id}}</td>
                    <td>{{food.name}}</td>
                    <td class="number-data">{{food.price}}</td>
                    <td>
                        <input type="number" v-model.lazy="food.stock" class="number-data" min="0">
                    </td>
                    <td class="number-data">
                        {{food.price*food.stock|numberWithDelimiter}}
                    </td>
                </tr>
                <tr>
                    <td colspan="4">
                        合計金額
                    </td>
                    <td class="number-data"> {{totalPrice|numberWithDelimiter}}</td>
                </tr>
                <tr>
                    <td colspan="5">
                        <center>
                            <scan v-show="!canBuy" class="errorMsg">残高が足りません！</scan>
                            <button @click="doBuy" :disabled="!canBuy">購入</button>
                        </center>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        data: function () {
            return {
                title: '商品一覧',
                headers: [
                    {
                        text: "商品番号", value: 'id'
                    },
                    {
                        text: "商品名", value: 'name'
                    },
                    {
                        text: "値段", value: 'price'
                    },
                    {
                        text: "注文数", value: "stock"
                    },
                    {
                        text: "金額", value: "subTotal"
                    }
                ],
                foods: [
                    {
                        id: 1, name: "ラーメン", price: 700, stock: 0
                    },
                    {
                        id: 2, name: "和式カレー", price: 500, stock: 0
                    },
                    {
                        id: 3, name: "オムライス", price: 800, stock: 0
                    }
                ]
            }
        },
        methods: {
            doBuy: function () {
                alert("doBuy for this amount?");
                alert("Bought");
                this.foods.forEach(function (food) {
                    food.stock = 0
                })
            }
        },
        computed: {
            totalPrice: function () {
                return this.foods.reduce(function (sum, item) {
                    return sum + (item.price * item.stock)
                }, 0)
            },
            canBuy: function () {
                return this.totalPrice <= 10000 // TODO wallet money 10000
            },
            errorMsgStyle: function () {
                return {
                    border: this.canBuy ? '' : '3px solid red'
                }
            }
        },
        filters: {
            numberWithDelimiter: function (value) {
                if (!value) {
                    return '0'
                }
                return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
            }
        }
    }

    // Vue.component('tab-food', {
    //     template: '<div>Food component</div>'
    // })
    // Vue.component('tab-drinks', {
    //     template: '<div>Drinks component</div>'
    // })
    // Vue.component('tab-sweets', {
    //     template: '<div>Sweets component</div>'
    // })
    // new Vue({
    //     el: '#dynamic-product-categories',
    //     data: {
    //         currentTab: 'Food',
    //         tabs: ['Food', 'Drinks', 'Sweets']
    //     },
    //     computed: {
    //         currentTabComponent: function () {
    //             return 'tab-' + this.currentTab.toLowerCase()
    //         }
    //     }
    // })
    //------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------

</script>

<style scoped>

</style>
<style src="../assets/css/table.css"></style>
