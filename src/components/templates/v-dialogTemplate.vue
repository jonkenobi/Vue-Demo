<template>
    <v-dialog v-model="showDialog" width="500">
        <template v-slot:activator="{ on }">
            <v-btn color="red lighten-2"
                   dark
                   v-on="on">
                {{buttonText}}
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="headline grey lighten-2 justify-center"
                          color="primary">
                {{title}}
            </v-card-title>
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex md6>
                        <v-card-text md4>チャージ金額を入力：</v-card-text>
                    </v-flex>
                    <v-flex md6>
                        <v-text-field v-model="chargeAmount" type="number" text-xs-left>
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                       text
                       @click="closeDialog();chargeMoney(chargeAmount)">
                    実行
                </v-btn>
                <v-btn color="secondary" @click="closeDialog">キャンセル</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "v-dialogTemplate",
        data() {
            return {
                buttonText:
                    {type: String},
                title: {type: String},
                showDialog: false,
                chargeAmount: 0,
            }
        },
        methods: {
            closeDialog: function () {
                this.showDialog = false
            }
        }
        //PLEASE ASSIGN PASS THESE PROPS FOR USE
        // props: {,
        //     'title': ,
        //     'buttonsTexts': {
        //         type: Array
        //     }
        // }

    }
</script>

<style scoped>

</style>