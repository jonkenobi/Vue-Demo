<template>
    <v-app>
        <v-btn color="primary" dark @click="showDialog = true" >
            {{buttonText}}
        </v-btn>
        <v-dialog v-model="showDialog" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2 justify-center" color="primary">
                    {{title}}
                </v-card-title>
                <v-container id="buyConfirmationContents" grid-list-md>
                    <v-layout row wrap>
                        <v-flex>
                            <v-card-text center>{{totalPrice}} 円で購入しますか？</v-card-text>
                        </v-flex>
                    </v-layout>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary"
                           text
                           @click="closeDialog();$emit('buyConfirmed')">
                        はい
                    </v-btn>
                    <v-btn color="secondary" @click="closeDialog()">いいえ</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
    export default {
        name: "doBuyTemplate",
        data() {
            return {
                buttonText: "購入",
                title: "購入確認",
                showDialog: false
            }
        },
        props: {
            "totalPrice": {type: Number},
            "canBuy": {type: Boolean}
        },
        methods: {
            closeDialog: function () {
                this.showDialog = false
            },
        }
    }
</script>

