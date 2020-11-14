package com.productmanagement.backend.services;

import com.productmanagement.backend.exceptions.ProductNotFoundException;
import com.productmanagement.backend.models.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ProductServiceTests {

    @Autowired
    private ProductService productService;


    @Test
    public void productServiceISNotNull() {
        assertNotNull(productService);
    }


    @Test
    public void getProductReturnsAProduct() throws ProductNotFoundException {
        String productId = "1";
        Product expected = new Product(productId, "1", "1", "jess", "anotehr", "yah", "woo");
        Product actual = productService.getProduct(productId);
        assertEquals(expected.getId(), actual.getId());
//        assertEquals(expected.getName(), actual.getName());
    }

}
