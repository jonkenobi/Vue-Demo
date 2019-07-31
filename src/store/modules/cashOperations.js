export default {
    state: {
        CurrentBalance: 10000,
    },
    mutations: {
        deductMoney(state, totalPrice) {
            state.CurrentBalance -= parseInt(totalPrice)
        },
        chargeMoney(state, chargeAmount) {
            state.CurrentBalance += parseInt(chargeAmount)
        }
    }
}