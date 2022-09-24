import {SaleItem} from './classes.js'
import { NumberFormatter } from './number-formatter.js';

const app = Vue.createApp({

    data() {
        return {
            // models map (comma separated key/value pairs)
            // TODO Add selected Product
            quantityToBuy: new Object()
        };
    },
    
    computed: Vuex.mapState({
        product: 'selectedProduct'
    }),

    mounted() {
    },

    methods: {
        // comma separated function declarations
        
        addToCart() {
           sessionStore.commit("addItem", new SaleItem(this.product, this.quantityToBuy));
        }
    },

    // other modules
    mixins:[NumberFormatter]

});

// other component imports go here

// Importing data store
import {sessionStore} from './session-store.js'
app.use(sessionStore);

// import the navigation menu
import { navigationMenu } from './navigation-menu.js';

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);

// mount the page - this needs to be the last line in the file
app.mount("main");