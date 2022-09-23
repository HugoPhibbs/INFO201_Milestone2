let productsApi = '/api/products';

const app = Vue.createApp({

    data() {
        return {
            // models map (comma separated key/value pairs)
            products: new Array()
        };
    },

    mounted() {
        // semicolon separated statement
        this.getProducts();
    },

    methods: {
        // comma separated function declarations
        getProducts() {
            axios.get(productsApi).then(res => {
                this.products = res.data;
            }).catch(e => {
                console.log(e);
                alert("Error occured");
            })
        }, 
        
        view(product) {
            sessionStore.commit('selectedProduct', product);
            window.location='product.html';
        }
    },

    // other modules
    mixins: []

});

// other component imports go here
// 
// import the navigation menu
import { navigationMenu } from './navigation-menu.js';

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);

// Importing session store  
import { sessionStore } from './session-store.js';
app.use(sessionStore); 

// mount the page - this needs to be the last line in the file
app.mount("main");