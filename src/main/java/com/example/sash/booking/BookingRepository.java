package com.example.sash.booking;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface BookingRepository extends MongoRepository<Booking, String> {

    // Find bookings by user ID
    List<Booking> findByUserId(String userId);

    // Find bookings by package ID
    List<Booking> findByPackageId(String packageId);

    // Optional: Add custom queries if needed (e.g., by date, status, etc.)
}
