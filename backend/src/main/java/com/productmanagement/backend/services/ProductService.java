package com.productmanagement.backend.services;

import com.productmanagement.backend.exceptions.ProductNotFoundException;
import com.productmanagement.backend.models.Product;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class ProductService {

    private static final Logger logger = Logger.getLogger(ProductService.class.getName());

    private List<Product> products = new ArrayList<>();

    @PostConstruct
    public void loadProducts() {
        String FILE_PATH = "src/main/resources/products.csv";
        String line;

        try {
            BufferedReader reader = new BufferedReader(new FileReader(FILE_PATH));
            reader.readLine(); // Ignore the first line containing headers

            while ((line = reader.readLine()) != null) {
                String[] values = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
                products.add(new Product(values[0], values[1], values[2].replaceAll("\"", ""), values[3], values[4], values[5], values[6]));
            }
            System.out.println("Loaded products");
        } catch (IOException e) {
           logger.warning("Products not loaded");
        }
    }

    public Product getProduct(String productId) throws ProductNotFoundException {
        return products.stream()
                .filter(product -> product.getId().equals(productId))
                .findFirst()
                .orElseThrow(ProductNotFoundException::new);
    }

    public List<Product> getAllProducts() { return products; }
}