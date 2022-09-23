export const navigationMenu = {
    template:
        `

        <div class="nav-div"> 

            <div class = "nav-links-div">
                <a href="index.html"><button>Home </button></a>
 
                <a href = "view-products.html"><button>View Products</button></a>
                <form id = "sign-out-form" action = "sign-out" method = "GET">
                    <button type = "submit">Sign out</button>
                </form>
            </div>
                
            <!-- 
              <% if (customer != null) { %>
            <h2>Hi <%= customer.getUsername() %></h2>
            <% }%> 
            -->
            
        </div>
        `
};