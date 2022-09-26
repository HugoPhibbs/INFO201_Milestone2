"use strict";

export const navigationMenu = {

    computed: {
        signedIn() {
            return this.customer != null;
        },

        ...Vuex.mapState({
                customer: 'currentCustomer'
        })
    },

    template:
            `
            <div id = "welcome-div" v-if = "signedIn">
               Welcome {{customer.firstName}} {{customer.surname}}
            </div>
            
            <nav>
                <div class = "nav-div">
                    <a class="nav-link" href=".">Home</a>
                </div>
                <div class = "nav-div" v-if="signedIn">
                    <a class="nav-link" href="view-products.html" v-if="signedIn">Browse Products</a>
                </div>
                <div class = "nav-div"  v-if="signedIn">
                    <a class="nav-link" href="cart.html" v-if="signedIn">View Cart</a>
                </div>
                <div class = "nav-div"  v-if="signedIn">
                    <a class="nav-link" href="#" v-if="signedIn" @click="signOut()">Sign Out</a>
                </div>
                <div class = "nav-div"  v-if="!signedIn">
                    <a class="nav-link" href="sign-in.html" v-if="!signedIn">Sign In</a>
                </div>
            </nav>
            `
    ,

    methods: {
        signOut() {
            sessionStorage.clear();
            window.location = '.';
        }
    }
};