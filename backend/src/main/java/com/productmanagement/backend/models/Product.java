package com.productmanagement.backend.models;

public class Product {
    private int id;
    private String name;
    private String description;
    private int categoryId;
    private String creationDate;
    private String updateDate;
    private String lastPurchasedDate;

    public Product(Integer id, String name, String description, Integer categoryId, String creationDate, String updateDate, String lastPurchasedDate) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryId = categoryId;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.lastPurchasedDate = lastPurchasedDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    public String getLastPurchasedDate() {
        return lastPurchasedDate;
    }

    public void setLastPurchasedDate(String lastPurchasedDate) {
        this.lastPurchasedDate = lastPurchasedDate;
    }


}
