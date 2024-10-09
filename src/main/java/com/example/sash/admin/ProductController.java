package com.example.sash.admin;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final Admin admin = new Admin();

    @PostMapping("/add")
    public void addProduct(@RequestBody Product product) {
        admin.addProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable int id) {
        admin.deleteProduct(id);
    }

    @PutMapping("/increase/{id}")
    public void increaseVolume(@PathVariable int id, @RequestParam int amount) {
        admin.increaseVolume(id, amount);
    }

    @PutMapping("/decrease/{id}")
    public void decreaseVolume(@PathVariable int id, @RequestParam int amount) {
        admin.decreaseVolume(id, amount);
    }

    @GetMapping
    public List<Product> getProductList() {
        return admin.getProductList();
    }
}
