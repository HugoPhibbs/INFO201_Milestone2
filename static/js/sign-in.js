let customerExistsApi = ({username}) => `/api/customer/${username}`;

const app = Vue.createApp({

    data() {
        return {
            // models map (comma separated key/value pairs)
            customer: new Object()
        };
    },

    mounted() {
        // semicolon separated statements
    },

    methods: {
        // comma separated function declarations
        signIn() {
            axios.get(customerExistsApi({'username': this.customer.username}))
                .then(res => {
                    sessionStore.commit("signIn", res.data);
                    window.location = 'index.html';
                }).catch(error => {
                console.log(error);
                alert("An error occurred - check the console for details.");
            });
        }
    },

    // other modules
    mixins: []

});

// other component imports go here

// import data store
import { sessionStore } from './session-store.js'
        app.use(sessionStore);


// import the navigation menu
import { navigationMenu } from './navigation-menu.js';

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);

// mount the page - this needs to be the last line in the file
app.mount("main");