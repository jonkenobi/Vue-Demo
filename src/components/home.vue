<template>
    <div id="home" class="home">
        <h2>ホームページ</h2>
        <v-app>
            <v-layout justify-center>
                <v-card width="50%" height="80%">
                    Balance:{{CurrentBalance}}
                    <br>
                    <v-container grid-list-md>
                        <v-layout row wrap>
                            <v-flex md3>
                                <v-text>購入額</v-text>
                            </v-flex>
                            <v-flex md9>
                                <v-text-field xs9 solo type="number" min="0"
                                              v-model="totalPrice" style="width: 120px;"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-btn @click="deductMoney(totalPrice)">Buy for {{totalPrice}}</v-btn>
                    <v-btn v-if="promptChargeWhenUnderThreshold" @click="chargeMoney(quickChargeAmount)">Quick
                        charge
                        for {{quickChargeAmount}}?
                    </v-btn>
                    <chargePopup></chargePopup>
                     <v-checkbox
                                                :input-value="isTransferred('transferred')"
                                                :disabled="isTransferred('transferred')"
                     ></v-checkbox>
                  </v-card>
                <br>
            </v-layout>
        </v-app>
    </div>

</template>

<script>
    import {mapMutations} from 'vuex'
    import chargePopup from '@/components/templates/chargeDialogTemplate'


    export default {
        name: 'home',
        components: {
            chargePopup
        },
        data() {
            return {
                totalPrice: 0,
                quickChargeAmount: 1000
            }
        },
        props: {
            'CurrentBalance': {
                type: Number
            },
        },
        methods: {
            ...mapMutations([
                'deductMoney', "chargeMoney"
            ]),
            isTransferred(data) {
                return data === "transferred"
            },
            OfficialBondRegistration: function () {
                this.totalPrice = 9000
            }
        },
        computed: {
            promptChargeWhenUnderThreshold: function () {
                let PROMPT_CHARGE_THRESHOLD = 2000;
                return this.CurrentBalance < PROMPT_CHARGE_THRESHOLD
            },


        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h2 {
        color: red;
    }

</style>


