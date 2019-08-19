<template>
    <v-flex xs2>
        <v-dialog v-model="confirmationDialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn
                        class="mx-0"
                        color="secondary"
                        v-on="on"
                        :disabled="isDisabled"
                >
                    <slot name="buttonText">default text</slot>
                </v-btn>
            </template>

            <v-card>
                <v-card-text>
                    <slot name="text">default text</slot>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="buttonClickAction">はい</v-btn>
                    <v-btn color="error" @click="closeConfirmationDialog">いいえ</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="afterConfirmationDialog"
                  width="500">
            <v-card>
                <v-card-text>
                    <slot name="afterConfirmationMsg">defaultAfterConfirmationMsg</slot>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click.native="closeAfterConfirmationDialog">
                        <slot name="afterConfirmationOkBtn">Ok</slot>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-flex>
</template>

<script>
    export default {
        name: "RegistrationBtn",
        data: function () {
            return {
                confirmationDialog: false,
                afterConfirmationDialog: false
            }
        },
        props: {
            'isDisabled': {type: Boolean}
        },
        methods: {
            buttonClickAction: function () {
                this.$emit('action');
                this.closeConfirmationDialog();
                this.afterConfirmationDialog = true;
            },
            closeConfirmationDialog: function () {
                this.confirmationDialog = false;
            },
            closeAfterConfirmationDialog: function () {
                this.afterConfirmationDialog = false;
            }
        }
    }
</script>
