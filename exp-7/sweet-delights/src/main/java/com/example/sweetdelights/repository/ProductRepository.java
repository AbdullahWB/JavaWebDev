package com.example.sweetdelights.repository;

import com.example.sweetdelights.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}