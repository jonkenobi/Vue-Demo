<template>
    <template>
        <v-dialog
                v-model="confirmationDialog">
            <v-card>
                <v-card-text><slot name="cardText">入力内容を仮登録しますか？</slot></v-card-text>
<!--                使い方<v-dialog-template><template v:slot="cardText">入力内容を仮登録しますか？</template>...<template><template><v-dialog-template>-->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="dummyRegistrationFunction()">はい</v-btn>
                    <v-btn color="error" @click="confirmationDialog = false">いいえ</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </template>

    <script>
        export default {
            name: "RegistrationBtn",
            data: function () {
                return {
                    buttonText: "仮登録",
                    confirmationDialog: false,
                    afterConfirmationDialog: false
                }
            },
            methods: {
                dummyRegistrationFunction() {

                },
                dummyClose() {
                }
            }
        }
    </script>

    <style scoped>

    </style>