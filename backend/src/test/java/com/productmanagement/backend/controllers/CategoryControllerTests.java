package com.productmanagement.backend.controllers;

import com.productmanagement.backend.models.Category;
import com.productmanagement.backend.services.CategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(CategoryController.class)
public class CategoryControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoryService categoryService;

    @Test
    public void categoriesControllerHandlesCategoriesRequest() throws Exception {
        Category mockCategory1 = new Category("testIdOne", "nameOne");
        Category mockCategory2 = new Category("testIdTwo", "nameTwo");
        List<Category> mockCategoryList = new ArrayList<>();
        mockCategoryList.add(mockCategory1);
        mockCategoryList.add(mockCategory2);

        when(categoryService.getAllCategories()).thenReturn(mockCategoryList);

        this.mockMvc.perform(get("/categories")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("{\"data\":[{\"id\":\"testIdOne\",\"name\":\"nameOne\"},{\"id\":\"testIdTwo\",\"name\":\"nameTwo\"}]}")));
    }
}
