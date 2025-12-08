package com.example.sweetdelights.service;

import com.example.sweetdelights.model.Product;
import com.example.sweetdelights.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> findAll() {
        return repo.findAll();
    }

    public Optional<Product> findById(Long id) {
        return repo.findById(id);
    }

    public Product save(Product p) {
        return repo.save(p);
    }
}