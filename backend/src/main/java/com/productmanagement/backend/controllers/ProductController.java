package com.productmanagement.backend.controllers;

import com.productmanagement.backend.models.ProductResponse;
import com.productmanagement.backend.models.ProductsResponse;
import com.productmanagement.backend.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) { this.productService = productService; }

    @GetMapping("products")
    public ResponseEntity<?> getAllProducts() throws Exception {
        return ResponseEntity.ok(new ProductsResponse(productService.getAllProducts()));
    }

    @GetMapping("products/{productId}")
    public ResponseEntity<?> getProductDetails(@PathVariable("productId") String productId) throws Exception {
        return ResponseEntity.ok(new ProductResponse(productService.getProduct(productId)));
    }

}
