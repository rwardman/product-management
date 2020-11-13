package com.productmanagement.backend.models;

import java.util.List;

public class CategoriesResponse {

    private List<Category> data;

    public CategoriesResponse(List<Category> categories) { data = categories;}

    public List<Category> getData() {
        return data;
    }

    public void setData(List<Category> data) {
        this.data = data;
    }
}
