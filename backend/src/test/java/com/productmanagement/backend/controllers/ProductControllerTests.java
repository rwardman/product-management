package com.productmanagement.backend.controllers;

import com.productmanagement.backend.models.Product;
import com.productmanagement.backend.services.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.HttpClientErrorException;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProductController.class)
public class ProductControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    @Test
    public void controllerHandlesProductsRequest() throws Exception {
        Product mockProduct1 = new Product("id1", "a product", "small", "3", "12/10/18", "14/5/20", "1/10/20");
        Product mockProduct2 = new Product("id2", "another product", "large", "1", "12/10/18", "14/5/20", "1/10/20");
        List<Product> mockProductList = new ArrayList<>();
        mockProductList.add(mockProduct1);
        mockProductList.add(mockProduct2);

        when(productService.getAllProducts()).thenReturn(mockProductList);

        this.mockMvc.perform(get("/products")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("{\"data\":[{\"id\":\"id1\",\"name\":\"a product\",\"description\":\"small\",\"categoryId\":\"3\",\"creationDate\":\"12/10/18\",\"updateDate\":\"14/5/20\",\"lastPurchasedDate\":\"1/10/20\"},{\"id\":\"id2\",\"name\":\"another product\",\"description\":\"large\",\"categoryId\":\"1\",\"creationDate\":\"12/10/18\",\"updateDate\":\"14/5/20\",\"lastPurchasedDate\":\"1/10/20\"}]}")));
    }

    @Test
    public void controllerHandlesProductByIdRequest() throws Exception {
        Product mockProduct = new Product("1", "a product", "small", "3", "12/10/18", "14/5/20", "1/10/20");

        when(productService.getProduct("1")).thenReturn(mockProduct);

        this.mockMvc.perform(get("/products/1")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("{\"data\":{\"id\":\"1\",\"name\":\"a product\",\"description\":\"small\",\"categoryId\":\"3\",\"creationDate\":\"12/10/18\",\"updateDate\":\"14/5/20\",\"lastPurchasedDate\":\"1/10/20\"}}")));
    }

}
