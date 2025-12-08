// src/main/java/com/example/sweetdelights/web/HomeController.java
package com.example.sweetdelights.web;

import com.example.sweetdelights.repo.InMemoryProductRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    private final InMemoryProductRepository repo;

    public HomeController(InMemoryProductRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("featured", repo.findAll().stream().limit(3).toList());
        return "index";
    }
}
