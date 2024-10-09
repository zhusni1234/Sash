package com.example.sash.admin;

import java.util.ArrayList;
import java.util.List;

public class Admin {
    private List<Product> productList;

    public Admin() {
        this.productList = new ArrayList<>();
    }

    // Add a product
    public void addProduct(Product product) {
        productList.add(product);
    }

    // Delete a product by id
    public void deleteProduct(int id) {
        productList.removeIf(product -> product.getId() == id);
    }

    // Increase product volume
    public void increaseVolume(int id, int amount) {
        for (Product product : productList) {
            if (product.getId() == id) {
                product.setVolume(product.getVolume() + amount);
                break;
            }
        }
    }

    // Decrease product volume
    public void decreaseVolume(int id, int amount) {
        for (Product product : productList) {
            if (product.getId() == id) {
                product.setVolume(product.getVolume() - amount);
                break;
            }
        }
    }

    // Get the list of products
    public List<Product> getProductList() {
        return productList;
    }
}

