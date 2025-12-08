package com.example.sweetdelights.controller;

import com.example.sweetdelights.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    private final ProductService productService;

    public HomeController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping({ "/", "/index" })
    public String index(Model model) {
        model.addAttribute("featured", productService.findAll());
        return "index";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }
}