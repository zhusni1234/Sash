package com.example.sash.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    // Create or update a booking
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    // Find booking by ID
    public Optional<Booking> getBookingById(String id) {
        return bookingRepository.findById(id);
    }

    // Find all bookings by user ID
    public List<Booking> getBookingsByUserId(String userId) {
        return bookingRepository.findByUserId(userId);
    }

    // Find all bookings by package ID
    public List<Booking> getBookingsByPackageId(String packageId) {
        return bookingRepository.findByPackageId(packageId);
    }

    // Delete booking by ID
    public void deleteBooking(String id) {
        bookingRepository.deleteById(id);
    }

    // Optional: Additional methods for business logic, like confirming payment
    public Booking confirmBookingPayment(String id) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            booking.confirmPayment();  // Mark payment as confirmed
            return bookingRepository.save(booking);  // Save the updated booking
        }
        return null;  // Or throw an exception if the booking doesn't exist
    }
}
