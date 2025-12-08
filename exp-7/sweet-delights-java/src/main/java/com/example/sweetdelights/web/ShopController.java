// src/main/java/com/example/sweetdelights/web/ShopController.java
package com.example.sweetdelights.web;

import com.example.sweetdelights.repo.InMemoryProductRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ShopController {
    private final InMemoryProductRepository repo;

    public ShopController(InMemoryProductRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/shop")
    public String shop(Model model) {
        model.addAttribute("products", repo.findAll());
        return "shop";
    }
}
