package com.productmanagement.backend.services;

import com.productmanagement.backend.models.Category;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class CategoryService {

    private static final Logger logger = Logger.getLogger(ProductService.class.getName());

    private List<Category> categories = new ArrayList<>();

    @PostConstruct
    public void loadCategories() {
        String FILE_PATH = "src/main/resources/categories.csv";
        String line;

        try {
            BufferedReader reader = new BufferedReader(new FileReader(FILE_PATH));
            reader.readLine(); // Ignore the first line containing headers

            while ((line = reader.readLine()) != null) {
                String[] values = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
                categories.add(new Category(Integer.valueOf(values[0]), values[1]));
            }
            System.out.println("Loaded categories");
        } catch (IOException e) {
            logger.warning("Products not loaded");
        }
    }
}
