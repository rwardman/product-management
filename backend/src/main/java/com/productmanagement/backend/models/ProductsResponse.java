package com.productmanagement.backend.models;

import java.util.List;

public class ProductsResponse {

    private List<Product> data;

    public ProductsResponse(List<Product> products) { data = products;}

    public List<Product> getData() {
        return data;
    }

    public void setData(List<Product> data) {
        this.data = data;
    }
}
