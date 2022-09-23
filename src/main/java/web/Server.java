package web;

import dao.DaoFactory;
import dao.ProductDAO;
import io.jooby.Jooby;
import io.jooby.ServerOptions;
import io.jooby.json.GsonModule;

public class Server extends Jooby {
    
        ProductDAO dao = DaoFactory.getProductDAO();

	public Server() {
		setServerOptions(new ServerOptions().setPort(8085));

		install(new GsonModule());

                mount(new ProductModule(dao));
		mount(new StaticAssetModule());
               
	}

	public static void main(String[] args) {
		System.out.println("\nStarting Server.");
		new Server().start();
	}

}
