
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { FaCalendarAlt } from 'react-icons/fa'; // Import calendar icon from react-icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { home } from '../../assets/images';

const CalendarPage = () => {
  // Example of unavailable dates
  const unavailableDates = [
    new Date(2024, 9, 13), // October 13, 2024
    new Date(2024, 9, 20), // October 20, 2024
    new Date(2024, 9, 27), // October 27, 2024
  ];

  // State to track selected start and end date
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Track if calendar is open

  const navigate = useNavigate(); // Use React Router's navigate function

  // Handle date changes (start and end date)
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Toggle calendar display
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  // Check availability function
  const checkAvailability = () => {
    if (startDate && endDate) {
      // Navigate to the room availability page and pass dates as state
      navigate('/AvailableList', {
        state: { checkIn: startDate, checkOut: endDate },
      });
    } else {
      alert('Please select both check-in and check-out dates');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundImage: `url(${home})`, // Set background image
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
      }}
    >
      {/* Container for the Heading and Title */}
      <div style={{ width: '100%', maxWidth: '600px', textAlign: 'left', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Hotel Booking</h2>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Choose your check-in and check-out dates</h3>
      </div>

      {/* Black box for DatePicker and Check Availability button */}
      <div style={{ backgroundColor: 'black', padding: '2rem', borderRadius: '8px', color: 'white' }}>
        {/* Check-in and Check-out date input with calendar icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'center' }}>
          {/* Check-in Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ color: 'white' }}>Check-in:</label>
            <input
              type="text"
              placeholder="Select check-in date"
              value={startDate ? startDate.toDateString() : ''}
              readOnly
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <FaCalendarAlt
              style={{ cursor: 'pointer', color: 'white' }}
              onClick={toggleCalendar} // Toggle the calendar on click
            />
          </div>

          {/* Check-out Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ color: 'white' }}>Check-out:</label>
            <input
              type="text"
              placeholder="Select check-out date"
              value={endDate ? endDate.toDateString() : ''}
              readOnly
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <FaCalendarAlt
              style={{ cursor: 'pointer', color: 'white' }}
              onClick={toggleCalendar} // Toggle the calendar on click
            />
          </div>

          {/* Check Availability Button */}
          <button
            onClick={checkAvailability}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: '#F2F3A4',
              color: 'black',
              cursor: 'pointer',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'grey';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F2F3A4';
              e.currentTarget.style.color = 'black';
            }}
          >
            CHECK AVAILABILITY
          </button>
        </div>

        {/* Calendar (conditionally rendered based on toggle) */}
        {isCalendarOpen && (
          <div style={{ marginTop: '1rem' }}>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              minDate={new Date()} // Disable past dates
              maxDate={addDays(new Date(), 365)} // Allow selection up to 1 year in advance
              excludeDates={unavailableDates} // Disable unavailable dates
              highlightDates={unavailableDates.map(date => ({ 'react-datepicker__day--highlighted-custom': [date] }))}
            />
          </div>
        )}

        {/* Show selected dates */}
        {startDate && endDate && (
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p><strong>Check-in Date:</strong> {startDate.toDateString()}</p>
            <p><strong>Check-out Date:</strong> {endDate.toDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;

