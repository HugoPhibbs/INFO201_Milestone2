package web;

import dao.CustomerDAO;
import domain.Customer;
import io.jooby.Jooby;
import io.jooby.StatusCode;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/**
 *
 * @author Hugo
 */
public class CustomerModule extends Jooby {

    CustomerDAO dao;

    CustomerModule(CustomerDAO newDao) {
        dao = newDao;

        // Adding a new customer
        post("/api/register/", ctx -> {
            dao.saveCustomer(ctx.body().to(Customer.class));
            return ctx.send(StatusCode.CREATED);
        });

        // Searching a customer by username
        get("/api/customer/{username}", ctx -> {
            Customer customer = dao.searchByUsername(ctx.path("username").value());
            if (customer == null) {
                return ctx.send(StatusCode.NOT_FOUND);
            } else {
                return customer;
            }
        });
    }

}
