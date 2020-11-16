package com.productmanagement.backend.services;

import com.productmanagement.backend.models.Category;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class CategoryServiceTests {

    @Autowired
    private CategoryService categoryService;

    @Test
    public void categoryServiceIsNotNull() {
        assertNotNull(categoryService);
    }

    @Test
    public void getAllCategoriesReturnsCategories() {

        Category mockCategory1 = new Category("1", "cat1");
        Category mockCategory2 = new Category("2", "cat2");
        List<Category> mockCategories = new ArrayList<>();
        mockCategories.add(mockCategory1);
        mockCategories.add(mockCategory2);

        ReflectionTestUtils.setField(categoryService, "categories", mockCategories);

        List<Category> actual = categoryService.getAllCategories();

        assertEquals(mockCategories, actual);
    }
}
