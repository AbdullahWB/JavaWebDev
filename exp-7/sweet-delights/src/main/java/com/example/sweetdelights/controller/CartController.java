package com.example.sweetdelights.controller;

import com.example.sweetdelights.model.Cart;
import com.example.sweetdelights.model.CartItem;
import com.example.sweetdelights.model.Product;
import com.example.sweetdelights.service.ProductService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/cart")
public class CartController {
    private final ProductService productService;
    private static final String SESSION_CART = "CART";

    public CartController(ProductService productService) {
        this.productService = productService;
    }

    private Cart getCart(HttpSession session) {
        Cart cart = (Cart) session.getAttribute(SESSION_CART);
        if (cart == null) {
            cart = new Cart();
            session.setAttribute(SESSION_CART, cart);
        }
        return cart;
    }

    @PostMapping("/add")
    public String addToCart(@RequestParam Long productId,
            @RequestParam(defaultValue = "1") int qty,
            HttpSession session) {
        var pOpt = productService.findById(productId);
        if (pOpt.isPresent()) {
            Product p = pOpt.get();
            CartItem item = new CartItem(p.getId(), p.getTitle(), p.getPrice(), p.getImageUrl(), qty);
            Cart cart = getCart(session);
            cart.addItem(item);
        }
        return "redirect:/cart/view";
    }

    @GetMapping("/view")
    public String viewCart(Model model, HttpSession session) {
        Cart cart = getCart(session);
        model.addAttribute("cart", cart);
        return "cart";
    }

    @PostMapping("/update")
    public String updateCart(@RequestParam Long productId, @RequestParam int quantity, HttpSession session) {
        Cart cart = getCart(session);
        cart.updateQuantity(productId, quantity);
        return "redirect:/cart/view";
    }

    @PostMapping("/remove")
    public String removeItem(@RequestParam Long productId, HttpSession session) {
        Cart cart = getCart(session);
        cart.remove(productId);
        return "redirect:/cart/view";
    }

    @PostMapping("/checkout")
    public String checkout(HttpSession session, Model model) {
        Cart cart = getCart(session);
        // For assignment: mock checkout — show confirmation and clear cart
        double total = cart.getTotal();
        cart.clear();
        model.addAttribute("total", total);
        return "checkout-success";
    }
}