package com.productmanagement.backend.services;

import com.productmanagement.backend.exceptions.ProductNotFoundException;
import com.productmanagement.backend.models.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.util.ReflectionTestUtils;


import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
public class ProductServiceTests {

    @Autowired
    private ProductService productService;

    @Test
    public void productServiceIsNotNull() {
        assertNotNull(productService);
    }


    @Test
    public void getProductReturnsAProductForASkuThatExists() throws ProductNotFoundException {
        String productId = "id1";
        Product mockProduct = new Product(productId, "a product", "small", "3", "12/10/18", "14/5/20", "1/10/20");
        List<Product> mockProductList = new ArrayList<>();
        mockProductList.add(mockProduct);
        ReflectionTestUtils.setField(productService, "products", mockProductList);

        Product actual = productService.getProduct(productId);

        assertEquals(mockProduct.getId(), actual.getId());
        assertEquals(mockProduct.getName(), actual.getName());
        assertEquals(mockProduct.getDescription(), actual.getDescription());
        assertEquals(mockProduct.getCategoryId(), actual.getCategoryId());
        assertEquals(mockProduct.getCreationDate(), actual.getCreationDate());
        assertEquals(mockProduct.getUpdateDate(), actual.getUpdateDate());
        assertEquals(mockProduct.getLastPurchasedDate(), actual.getLastPurchasedDate());
    }

    @Test
    public void getProductReturnsAProductForASkuThatDoesNotExist() {
        assertThrows(
                ProductNotFoundException.class,
                () -> productService.getProduct("id"));
    }

    @Test
    public void getAllProductsReturnsProductArray() {
        Product mockProduct1 = new Product("id1", "a product", "small", "3", "12/10/18", "14/5/20", "1/10/20");
        Product mockProduct2 = new Product("id2", "another product", "large", "1", "12/10/18", "14/5/20", "1/10/20");
        List<Product> mockProductList = new ArrayList<>();
        mockProductList.add(mockProduct1);
        mockProductList.add(mockProduct2);
        ReflectionTestUtils.setField(productService, "products", mockProductList);

        List<Product> actual = productService.getAllProducts();

        assertEquals(mockProductList, actual);

    }

}
