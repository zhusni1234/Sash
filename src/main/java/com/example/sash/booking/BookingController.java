package com.example.sash.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Create or update a booking
    @PostMapping("/details")
    public Booking createOrUpdateBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    // Get booking by ID
    @GetMapping("/{id}")
    public Optional<Booking> getBookingById(@PathVariable String id) {
        return bookingService.getBookingById(id);
    }

    // Get all bookings for a user
    @GetMapping("/user/{userId}")
    public List<Booking> getBookingsByUserId(@PathVariable String userId) {
        return bookingService.getBookingsByUserId(userId);
    }

    // Get all bookings for a package
    @GetMapping("/package/{packageId}")
    public List<Booking> getBookingsByPackageId(@PathVariable String packageId) {
        return bookingService.getBookingsByPackageId(packageId);
    }

    // Confirm payment for a booking
    @PutMapping("/{id}/confirm-payment")
    public Booking confirmBookingPayment(@PathVariable String id) {
        return bookingService.confirmBookingPayment(id);
    }

    // Delete booking by ID
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable String id) {
        bookingService.deleteBooking(id);
    }
}
