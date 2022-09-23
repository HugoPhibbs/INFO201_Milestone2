export const sessionStore = Vuex.createStore({

    state () {
        selectedProduct: null;
    },

    mutations: {

        selectStudent(state, product) {
            state.selectedProduct = product;
        }

    },

    plugins: [window.createPersistedState({storage: window.sessionStorage})]

});