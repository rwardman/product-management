package com.productmanagement.backend.controllers;

import com.productmanagement.backend.models.CategoriesResponse;
import com.productmanagement.backend.services.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) { this.categoryService = categoryService; }

    @GetMapping("categories")
    public ResponseEntity<?> getAllCategories() throws Exception {
        return ResponseEntity.ok(new CategoriesResponse(categoryService.getAllCategories()));
    }

}
