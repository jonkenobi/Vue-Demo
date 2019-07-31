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
        <v-app>
            <v-container>
                <v-layout justify-center>
                    <v-card width="90%" app tabs elevation="10" tile>
                        <v-card-title>Products
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search"
                                          append-icon="search"
                                          label="Search"
                                          single-line
                                          hide-details
                            >
                            </v-text-field>
                            <v-spacer></v-spacer>
                            <p> 残高: {{CurrentBalance}}
                                <chargePopup></chargePopup>
                            </p>

                        </v-card-title>
                        <v-data-table :headers=headers :items="foods" :search="search" :style="errorMsgStyle">
                            <template v-slot:items="props">
                                <td>{{ props.item.id }}</td>
                                <td class="text-xs-left">{{ props.item.name}}</td>
                                <td class="text-xs-left">{{ props.item.price }}</td>
                                <td class="text-xs-left">
                                    <!--                                    <money v-model="props.item.stock">{{props.item.stock}}</money>-->
                                    <input type="number" v-model.lazy="props.item.stock"
                                           class="number-data"
                                           min="0">
                                </td>
                                <td class="text-xs-right">{{props.item.price*props.item.stock|numberWithDelimiter}}</td>
                            </template>
                            <template v-slot:no-results>
                                <v-alert :value="true" color="error" icon="warning">
                                    Your search for "{{ search }}" found no results.
                                </v-alert>
                            </template>
                            <template v-slot:footer>
                                <td :colspan="headers.length-1">
                                    <strong>合計金額</strong>
                                </td>
                                <td class="number-data text-xs-right"> {{totalPrice|numberWithDelimiter}}</td>
                            </template>
                        </v-data-table>
                        <p v-show="!canBuy" class="errorMsg">残高が足りません！</p>
                        <do-buy :totalPrice="totalPrice" :can-buy="canBuy" @buyConfirmed="doBuy()" ></do-buy>
<!--                        TODO disable buy when balance not enough to buy -->
                        <!-- <v-btn color="primary" @click="doBuy " :disabled="!canBuy">購入</v-btn>-->
                    </v-card>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    import chargePopup from "@/components/templates/chargeDialogTemplate"
    import doBuy from "@/components/templates/doBuyTemplate"
    import {mapMutations} from "vuex";

    export default {
        name: "ProductList",
        components: {
            chargePopup,
            doBuy
        },
        props: {
            'CurrentBalance': {
                type: Number
            }
        },
        data: function () {
            return {
                title: '商品一覧',
                search: '',
                headers: [
                    {
                        text: "商品番号",
                        value: 'id',
                        align: 'left',
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
                        text: "金額", value: "subTotal", sortable: false
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
                    },
                    {
                        id: 4, name: "お好み焼き", price: 800, stock: 0
                    },
                    {
                        id: 5, name: "とんかつ丼", price: 800, stock: 0
                    },
                    {
                        id: 6, name: "うどん", price: 800, stock: 0
                    }
                ],
            }
        },
        methods: {
            doBuy: function () {
                this.deductMoney(this.totalPrice);
                this.foods.forEach(function (food) {
                    food.stock = 0
                })
            },
            ...mapMutations([
                'deductMoney'
            ])
        },
        computed: {
            totalPrice: function () {
                return this.foods.reduce(function (sum, item) {
                    return sum + (item.price * item.stock)
                }, 0)
            },
            canBuy: function () {
                return this.totalPrice <= this.CurrentBalance
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
        },
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

<style src="../assets/css/table.css"></style>
