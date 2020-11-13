package com.productmanagement.backend.models;

public class ProductResponse {

    private Product data;

    public ProductResponse(Product product) {
        data = product;
    }


    public Product getData() {
        return data;
    }

    public void setData(Product data) {
        this.data = data;
    }
}
