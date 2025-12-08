// src/main/java/com/example/sweetdelights/web/ProductController.java
package com.example.sweetdelights.web;

import com.example.sweetdelights.repo.InMemoryProductRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ProductController {
    private final InMemoryProductRepository repo;

    public ProductController(InMemoryProductRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/product/{id}")
    public String detail(@PathVariable Long id, Model model) {
        var p = repo.findById(id).orElse(null);
        model.addAttribute("product", p);
        model.addAttribute("notFound", p == null);
        return "product";
    }
}
