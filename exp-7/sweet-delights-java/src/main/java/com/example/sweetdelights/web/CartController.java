// src/main/java/com/example/sweetdelights/web/CartController.java
package com.example.sweetdelights.web;

import com.example.sweetdelights.model.Product;
import com.example.sweetdelights.repo.InMemoryProductRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.Map;

@Controller
public class CartController {
    private final InMemoryProductRepository repo;

    public CartController(InMemoryProductRepository repo) {
        this.repo = repo;
    }

    @SuppressWarnings("unchecked")
    private Map<Long, Integer> ensureCart(HttpSession s) {
        var cart = (Map<Long, Integer>) s.getAttribute("CART");
        if (cart == null) {
            cart = new LinkedHashMap<>();
            s.setAttribute("CART", cart);
        }
        return cart;
    }

    @PostMapping("/cart/add/{id}")
    public String add(@PathVariable Long id, HttpSession s) {
        var p = repo.findById(id).orElse(null);
        if (p != null) {
            ensureCart(s).merge(id, 1, Integer::sum);
        }
        return "redirect:/cart";
    }

    @PostMapping("/cart/remove/{id}")
    public String remove(@PathVariable Long id, HttpSession s) {
        var cart = ensureCart(s);
        cart.remove(id);
        return "redirect:/cart";
    }

    @PostMapping("/cart/update/{id}")
    public String update(@PathVariable Long id, @RequestParam int qty, HttpSession s) {
        var cart = ensureCart(s);
        if (qty <= 0)
            cart.remove(id);
        else
            cart.put(id, qty);
        return "redirect:/cart";
    }

    @GetMapping("/cart")
    public String cart(HttpSession s, Model model) {
        record Item(Product product, int qty) {
        }
        var cart = ensureCart(s);
        var items = cart.entrySet().stream()
                .map(e -> repo.findById(e.getKey()).map(p -> new Item(p, e.getValue())).orElse(null))
                .filter(i -> i != null).toList();
        model.addAttribute("items", items);
        return "cart";
    }
}
