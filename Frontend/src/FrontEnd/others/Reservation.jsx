import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RoomDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, checkIn, checkOut } = location.state || {};

  if (!room || !checkIn || !checkOut) {
    return <p>No room details available. Please select a room.</p>;
  }

  // Calculate the number of nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const numberOfNights = Math.round((checkOutDate - checkInDate) / oneDay);

  // Calculate total payment
  const totalPayment = numberOfNights * room.price;

  const handlePayNow = () => {
    alert(`Proceeding to payment for ${room.name}. Total payment: $${totalPayment}`);
    // Navigate to payment or confirmation page, passing the totalPayment data
    navigate('/payment', { state: { room, checkIn, checkOut, totalPayment } });
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
        backgroundColor: '#f4f4f4',
      }}
    >
      {/* Room Details Container */}
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#F2F3A4' }}>
          {room.name}
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{room.description}</p>
        
        <p style={{ marginBottom: '1rem' }}>
          <strong>Price per night:</strong> ${room.price}
        </p>
        
        <p style={{ marginBottom: '1rem' }}>
          <strong>Check-in:</strong> {checkInDate.toDateString()}
        </p>
        
        <p style={{ marginBottom: '1.5rem' }}>
          <strong>Check-out:</strong> {checkOutDate.toDateString()}
        </p>

        <p style={{ marginBottom: '1rem' }}>
          <strong>Total Nights:</strong> {numberOfNights} night(s)
        </p>

        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
          <strong>Total Payment:</strong> ${totalPayment}
        </p>

        {/* Pay Now Button */}
        <button
          onClick={handlePayNow}
          style={{
            padding: '1rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#F2F3A4',
            color: 'black',
            cursor: 'pointer',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s, color 0.3s',
            width: '100%',
            textAlign: 'center',
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
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetailsPage;
