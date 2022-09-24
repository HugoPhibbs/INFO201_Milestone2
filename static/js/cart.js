"use strict";
import {SaleItem, Sale} from './classes.js';
import { NumberFormatter } from './number-formatter.js';

let salesApi = "/api/sales/";


const app = Vue.createApp({

    data() {
        return {
            // models (comma separated key/value pairs)

        };
    },

    computed: Vuex.mapState({
        product: 'selectedProduct',
        items: 'items',
        customer: 'customer'
    }),

    mounted() {
        // semicolon separated statements


    },

    methods: {
        // comma separated function declarations
        getItemTotal(item) {
            return parseFloat(item.salePrice) * parseFloat(item.quantityPurchased);
        },

        checkOut() {
            let newSale = new Sale(this.customer, this.items);
            axios.post(salesApi, newSale)
                    .then(res => {
                        sessionStore.commit("clearCart");
                        window.location = "confirmation.html";
                    })
                    .catch(error => {
                        console.log(error);
                        alert("An error occurred - check the console for details.");
                    });
        },

        getGrandTotal() {
            let total = 0;
            for (let item of this.items) {
                total += this.getItemTotal(item);
            }
            return total;
        }
    },

    mixins: [NumberFormatter]

});

/* other component imports go here */

// import data store
import { sessionStore } from './session-store.js'
        app.use(sessionStore);

// import the navigation menu
import { navigationMenu } from './navigation-menu.js';

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);


// mount the page - this needs to be the last line in the file
app.mount("main");
