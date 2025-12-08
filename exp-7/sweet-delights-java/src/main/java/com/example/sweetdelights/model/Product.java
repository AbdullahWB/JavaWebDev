// src/main/java/com/example/sweetdelights/model/Product.java
package com.example.sweetdelights.model;

import java.math.BigDecimal;

public class Product {
    private Long id;
    private String name;
    private String category;
    private BigDecimal price;
    private double rating;
    private String image;

    public Product() {
    }

    public Product(Long id, String name, String category,
            BigDecimal price, double rating, String image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.rating = rating;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
