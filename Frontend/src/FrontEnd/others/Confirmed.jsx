//1st version

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ConfirmedPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room, checkIn, checkOut, totalPrice } = location.state || {};
  
//   if (!room || !checkIn || !checkOut || !totalPrice) {
//     return <p>No booking details available. Please try again.</p>;
//   }

//   // Simulated booking ID (replace with actual backend ID later)
//   const bookingId = 'BK123456'; 

//   const handleGoHome = () => {
//     navigate('/');  // Redirect to homepage or main booking page
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         padding: '2rem',
//         backgroundColor: '#f4f4f4',
//       }}
//     >
//       {/* Receipt Details Container */}
//       <div
//         style={{
//           backgroundColor: 'black',
//           color: 'white',
//           padding: '2rem',
//           borderRadius: '8px',
//           maxWidth: '600px',
//           width: '100%',
//         }}
//       >
//         <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#F2F3A4' }}>
//           Booking Confirmed
//         </h1>

//         <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
//           Your booking has been confirmed with the following details:
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Booking ID:</strong> {bookingId}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Room:</strong> {room.name}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Check-in:</strong> {new Date(checkIn).toDateString()}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Check-out:</strong> {new Date(checkOut).toDateString()}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Total Nights:</strong> {Math.round((new Date(checkOut) - new Date(checkIn)) / (24 * 60 * 60 * 1000))} night(s)
//         </p>

//         <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
//           <strong>Total Payment:</strong> ${totalPrice}
//         </p>

//         {/* Button Container */}
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
//           <button
//             onClick={handleGoHome}
//             style={{
//               padding: '0.75rem 1.5rem',
//               borderRadius: '4px',
//               border: 'none',
//               backgroundColor: '#F2F3A4',
//               color: 'black',
//               cursor: 'pointer',
//               fontSize: '1.2rem',
//               transition: 'background-color 0.3s, color 0.3s',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'grey';
//               e.currentTarget.style.color = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = '#F2F3A4';
//               e.currentTarget.style.color = 'black';
//             }}
//           >
//             Go to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmedPage;

//2nd version

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Confirmed = ({ bookingId }) => {
//   // State to hold booking data
//   const [bookingData, setBookingData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Use effect to fetch data when the component mounts
//   useEffect(() => {
//     // Fetch the booking data by bookingId
//     const fetchBookingData = async () => {
//       try {
//         const response = await axios.get(`/api/bookings/${bookingId}`);
//         setBookingData(response.data); // Save the booking data
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (err) {
//         setError("Error fetching booking data. Please try again.");
//         setLoading(false);
//       }
//     };

//     if (bookingId) {
//       fetchBookingData(); // Fetch data if bookingId is provided
//     }
//   }, [bookingId]); // Runs only when bookingId changes

//   // Loading state
//   if (loading) {
//     return <div>Loading booking details...</div>;
//   }

//   // Error state
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // Display the booking data
//   return (
//     <div className="confirmed-page">
//       <h1>Booking Confirmed!</h1>
//       {bookingData && (
//         <div className="booking-receipt">
//           <p><strong>Booking ID:</strong> {bookingData._id}</p>
//           <p><strong>User ID:</strong> {bookingData.userId}</p>
//           <p><strong>Check-In Date:</strong> {bookingData.checkIn}</p>
//           <p><strong>Check-Out Date:</strong> {bookingData.checkOut}</p>
//           <p><strong>Package ID:</strong> {bookingData.packageId}</p>
//           <p><strong>Add-Ons:</strong> {bookingData.addOns.join(", ")}</p>
//           <p><strong>Total Price:</strong> ${bookingData.totalPrice}</p>
//           <p><strong>Payment Confirmed:</strong> {bookingData.paymentConfirmed ? "Yes" : "No"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Confirmed;


//3rd version

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Confirmed = () => {
  const location = useLocation(); // Access the location object
  const bookingId = location.state?.bookingId; // Retrieve bookingId from the passed state
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(`/api/bookings/${bookingId}`);
        setBookingData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching booking data. Please try again.");
        setLoading(false);
      }
    };

    if (bookingId) {
      fetchBookingData();
    }
  }, [bookingId]);

  if (loading) {
    return <div>Loading booking details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="confirmed-page">
      <h1>Booking Confirmed!</h1>
      {bookingData && (
        <div className="booking-receipt">
          <p><strong>Booking ID:</strong> {bookingData._id}</p>
          <p><strong>User ID:</strong> {bookingData.userId}</p>
          <p><strong>Check-In Date:</strong> {bookingData.checkIn}</p>
          <p><strong>Check-Out Date:</strong> {bookingData.checkOut}</p>
          <p><strong>Package ID:</strong> {bookingData.packageId}</p>
          {/* <p><strong>Add-Ons:</strong> {bookingData.addOns.join(", ")}</p> */}
          <p><strong>Total Price:</strong> ${bookingData.totalPrice}</p>
          <p><strong>Payment Confirmed:</strong> {bookingData.paymentConfirmed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default Confirmed;

