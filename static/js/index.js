// create the Vue controller
const app = Vue.createApp();

// Importing session store  
import { sessionStore } from './session-store.js';

app.use(sessionStore); 

// import the navigation menu
import { navigationMenu } from './navigation-menu.js';

// register the navigation menu under the <navmenu> tag
app.component('navmenu', navigationMenu);

// attach the controller to the <main> tag
app.mount("main");