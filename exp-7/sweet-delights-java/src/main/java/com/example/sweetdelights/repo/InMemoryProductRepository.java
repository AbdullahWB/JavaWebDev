// src/main/java/com/example/sweetdelights/repo/InMemoryProductRepository.java
package com.example.sweetdelights.repo;

import com.example.sweetdelights.model.Product;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.*;

@Repository
public class InMemoryProductRepository {
    private final Map<Long, Product> data = new LinkedHashMap<>();

    public InMemoryProductRepository() {
        add(1L, "Velvet Chocolate Dream", "Chocolate", new BigDecimal("45.99"), 4.5, "/images/cake1.jpg");
        add(2L, "Summer Berry Bliss", "Fruit", new BigDecimal("52.50"), 4.0, "/images/cake2.jpg");
        add(3L, "Elegant Ivory Wedding Cake", "Wedding", new BigDecimal("350.00"), 5.0, "/images/cake3.jpg");
        add(4L, "Caramel Praline Crunch", "Caramel", new BigDecimal("49.99"), 4.2, "/images/cake4.jpg");
        add(5L, "Lemon Zest Delight", "Citrus", new BigDecimal("44.50"), 4.1, "/images/cake5.jpg");
        add(6L, "Tiramisu Cloud", "Coffee", new BigDecimal("55.00"), 4.6, "/images/cake6.jpg");
    }

    private void add(Long id, String name, String cat, BigDecimal price, double rating, String image) {
        data.put(id, new Product(id, name, cat, price, rating, image));
    }

    public List<Product> findAll() {
        return new ArrayList<>(data.values());
    }

    public Optional<Product> findById(Long id) {
        return Optional.ofNullable(data.get(id));
    }
}
