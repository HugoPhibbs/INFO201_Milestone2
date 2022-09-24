package web;

import dao.CustomerDAO;
import dao.DaoFactory;
import dao.ProductDAO;
import dao.SaleDAO;
import io.jooby.Jooby;
import io.jooby.ServerOptions;
import io.jooby.json.GsonModule;

public class Server extends Jooby {
    
        ProductDAO productDao = DaoFactory.getProductDAO();
        CustomerDAO customerDao = DaoFactory.getCustomerDAO();
        SaleDAO saleDao = DaoFactory.getSaleDAO();

	public Server() {
		setServerOptions(new ServerOptions().setPort(8085));    

		install(new GsonModule());

                mount(new SaleModule(saleDao));
                mount(new CustomerModule(customerDao));
                mount(new ProductModule(productDao));
		mount(new StaticAssetModule());
               
	}

	public static void main(String[] args) {
		System.out.println("\nStarting Server.");
		new Server().start();
	}

}
