package com.example.sweetdelights.config;

import com.example.sweetdelights.model.Product;
import com.example.sweetdelights.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final ProductRepository repo;

    public DataLoader(ProductRepository repo) {
        this.repo = repo;
    }

    public void run(String... args) throws Exception {
        // seed a few example cakes (image URLs are remote for simplicity)
        repo.save(new Product("Velvet Chocolate Dream",
                "Decadent dark chocolate velvet cake with silky frosting.",
                45.99,
                "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=800&h=600&auto=format&fit=crop",
                "Chocolate"));
        repo.save(new Product("Summer Berry Bliss",
                "Light sponge with fresh seasonal berries and cream.",
                52.50,
                "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&h=600&auto=format&fit=crop",
                "Fruit"));
        repo.save(new Product("Elegant Ivory Wedding Cake",
                "Three-tier wedding cake with classic ivory buttercream & florals.",
                350.00,
                "https://images.unsplash.com/photo-1604908177522-5f0dced3ab92?q=80&w=800&h=600&auto=format&fit=crop",
                "Wedding"));
    }
}