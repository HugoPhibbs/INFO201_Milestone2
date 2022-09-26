import {SaleItem} from './classes.js'
import {NumberFormatter} from './number-formatter.js';
// Importing data store
import {sessionStore} from './session-store.js'
// import the navigation menu
import {navigationMenu} from './navigation-menu.js';

const app = Vue.createApp({

    data() {
        return {
            quantityToBuy: undefined,
            quantityAvailable: undefined
        };
    },

    computed: Vuex.mapState({
        product: 'selectedProduct',
        items: 'items'
    }),

    mounted() {
        this.setQuantityAvailable();
    },

    methods: {
        // comma separated function declarations

        setQuantityAvailable() {
            let quantity = this.product.quantityInStock;
            for (let item of this.items) {
                if (item.product.productId === this.product.productId) {
                    quantity -= item.quantityPurchased
                }
            }
            this.quantityAvailable = quantity

        },

        addToCart() {
            sessionStore.commit("addItem", new SaleItem(this.product, this.quantityToBuy));
            this.quantityAvailable -= this.quantityToBuy;
            this.$refs.quantityToBuy.reset();
        },

    },

    // other modules
    mixins: [NumberFormatter]

});

// other component imports go here
app.use(sessionStore);

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);

// mount the page - this needs to be the last line in the file
app.mount("main");