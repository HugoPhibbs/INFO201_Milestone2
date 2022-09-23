/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package web;

import dao.ProductDAO;
import io.jooby.Jooby;

/**
 *
 * @author Hugo
 */
public class ProductModule extends Jooby {
    
    ProductDAO dao;
    
    ProductModule(ProductDAO newDao) {
        dao = newDao;
        get("/api/products", ctx -> dao.getProducts());
        
        get("/api/products", ctx -> dao.getProducts());
    }
}
