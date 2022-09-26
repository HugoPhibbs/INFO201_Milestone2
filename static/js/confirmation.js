const app = Vue.createApp({

    data() {
        return {

        };
    },

    mounted() {
        // semicolon separated statements
    },

    methods: {
        // comma separated function declarations
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