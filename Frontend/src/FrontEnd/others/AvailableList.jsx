import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Example rooms (simulating fetching from an API)
const availableRooms = [
  { id: 1, name: 'Deluxe Room', price: '$120/night', description: 'A spacious room with a king-sized bed and a balcony.' },
  { id: 2, name: 'Standard Room', price: '$80/night', description: 'A cozy room with all the essentials for a comfortable stay.' },
  { id: 3, name: 'Suite', price: '$200/night', description: 'A luxurious suite with a separate living area and an ocean view.' }
];

const RoomAvailabilityPage = () => {
  const location = useLocation();
  const { checkIn, checkOut } = location.state || {};
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  // Simulate fetching rooms based on check-in/check-out dates
  useEffect(() => {
    if (checkIn && checkOut) {
      setRooms(availableRooms); // In real implementation, fetch rooms from API
    }
  }, [checkIn, checkOut]);

  // Handle room booking (navigate to RoomDetailsPage with selected room data)
  const handleBookNow = (room) => {
    navigate('/room-details', {
      state: { room, checkIn, checkOut },
    });
  };

  if (!checkIn || !checkOut) {
    return <p>Please select your check-in and check-out dates first.</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#f4f4f4', // Light background to contrast the room cards
      }}
    >
      {/* Heading */}
      <h1 style={{ marginBottom: '2rem', color: '#333', fontSize: '2rem', fontFamily: 'Arial' }}>AVAILABLE PACKAGE</h1>

      <p style={{ marginBottom: '1.5rem' }}>
        <strong>Check-in:</strong> {checkIn.toDateString()} | <strong>Check-out:</strong> {checkOut.toDateString()}
      </p>

      {/* Room cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', width: '100%' }}>
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div
              key={room.id}
              style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                border: '1px solid #ccc',
              }}
            >
              <div>
                <h2 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>{room.name}</h2>
                <p>{room.description}</p>
                <p><strong>Price:</strong> {room.price}</p>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => handleBookNow(room)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  backgroundColor: '#F2F3A4',
                  color: 'black',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, color 0.3s',
                  alignSelf: 'flex-start',
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
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p>No rooms are available for the selected dates.</p>
        )}
      </div>
    </div>
  );
};

export default RoomAvailabilityPage;



