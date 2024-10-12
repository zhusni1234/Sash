package com.example.sash.booking;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "bookings")
public class Booking {

    @Id
    private String id;
    private String userId;
    private String checkInDate;  // Changed from Date to String
    private String checkOutDate;  // Changed from Date to String
    private String packageId;
    private List<String> addOns;
    private double totalPrice;
    private boolean paymentConfirmed;

    // Default constructor
    public Booking() {
    }

    // Parameterized constructor
    public Booking(String userId, String checkInDate, String checkOutDate, String packageId, List<String> addOns, double totalPrice, boolean paymentConfirmed) {
        this.userId = userId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.packageId = packageId;
        this.addOns = addOns;
        this.totalPrice = totalPrice;
        this.paymentConfirmed = paymentConfirmed;
    }

    // Getters and Setters for encapsulation
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCheckInDate() {  // Changed from Date to String
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {  // Changed from Date to String
        this.checkInDate = checkInDate;
    }

    public String getCheckOutDate() {  // Changed from Date to String
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {  // Changed from Date to String
        this.checkOutDate = checkOutDate;
    }

    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public List<String> getAddOns() {
        return addOns;
    }

    public void setAddOns(List<String> addOns) {
        this.addOns = addOns;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public boolean isPaymentConfirmed() {
        return paymentConfirmed;
    }

    public void setPaymentConfirmed(boolean paymentConfirmed) {
        this.paymentConfirmed = paymentConfirmed;
    }

    // Utility method to calculate total price based on package price and add-ons
    public void calculateTotalPrice(double basePrice, double addOnPrice) {
        this.totalPrice = basePrice + (addOnPrice * addOns.size());
    }

    // Utility method to confirm payment
    public void confirmPayment() {
        this.paymentConfirmed = true;
    }
}
