package com.example.sweetdelights.model;

import java.util.*;

public class Cart {
    private final Map<Long, CartItem> items = new LinkedHashMap<>();

    public void addItem(CartItem item) {
        CartItem existing = items.get(item.getProductId());
        if (existing != null) {
            existing.setQuantity(existing.getQuantity() + item.getQuantity());
        } else {
            items.put(item.getProductId(), item);
        }
    }

    public void updateQuantity(Long productId, int quantity) {
        CartItem item = items.get(productId);
        if (item != null) {
            if (quantity <= 0) {
                items.remove(productId);
            } else {
                item.setQuantity(quantity);
            }
        }
    }

    public void remove(Long productId) {
        items.remove(productId);
    }

    public Collection<CartItem> getItems() {
        return items.values();
    }

    public double getTotal() {
        return items.values().stream().mapToDouble(CartItem::getTotal).sum();
    }

    public void clear() {
        items.clear();
    }

    public int getQuantityCount() {
        return items.values().stream().mapToInt(CartItem::getQuantity).sum();
    }
}