/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package web;

import dao.ProductDAO;
import io.jooby.Jooby;
import io.jooby.StatusCode;
import domain.Product;

/**
 * @author Hugo
 */
public class ProductModule extends Jooby {

    ProductDAO dao;

    ProductModule(ProductDAO newDao) {
        dao = newDao;

        // Getting all products
        get("/api/products", ctx -> dao.getProducts());

        // Getting product by id
        get("/api/products/{id}", ctx -> {
            Product product = dao.searchById(ctx.path("id").value());
            if (product == null) {
                return ctx.send(StatusCode.NOT_FOUND);
            } else {
                return product;
            }
        });

        // Filtering products by category
        get("/api/categories/{category}", ctx -> dao.filterByCategory(ctx.path("category").value()));

        // Get all categories
        get("/api/categories", ctx -> dao.getCategories());
    }
}