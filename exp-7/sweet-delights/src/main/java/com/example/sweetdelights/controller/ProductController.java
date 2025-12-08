package com.example.sweetdelights.controller;

import com.example.sweetdelights.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/shop")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public String shop(Model model) {
        model.addAttribute("products", productService.findAll());
        return "shop";
    }

    @GetMapping("/{id}")
    public String productDetails(@PathVariable Long id, Model model) {
        var p = productService.findById(id);
        if (p.isPresent()) {
            model.addAttribute("product", p.get());
            return "product";
        } else {
            return "redirect:/shop";
        }
    }
}