let productsApi = '/api/products';
let categoriesApi = '/api/categories';
let filterByCategoryApi = ({category}) => `/api/categories/${category}`;

const app = Vue.createApp({

    data() {
        return {
            // models map (comma separated key/value pairs)
            products: new Array(),
            categories: new Array
        };
    },

    mounted() {
        // semicolon separated statement
        this.getProducts();
        this.getCategories();
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

        getCategories() {
            axios.get(categoriesApi)
                    .then(res => this.categories = res.data)
                    .catch(e => {
                        console.log(e);
                        alert("Error occured, check console");
                    });
        },

        filterProducts(category) {
            // TODO
            axios.get(filterByCategoryApi({category:category}))
                    .then(res => this.products = res.data)
                    .catch(e => {
                        console.log(e);
                        alert("Error occured, check console");
                    });
        },

        view(product) {
            sessionStore.commit('selectProduct', product);
            window.location = 'product.html';
        }
    },

    // other modules
    mixins: []

});

// other component imports go here

// Importing session store  
import { sessionStore } from './session-store.js';
app.use(sessionStore);

// import the navigation menu
import { navigationMenu } from './navigation-menu.js';

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);


// mount the page - this needs to be the last line in the file
app.mount("main");