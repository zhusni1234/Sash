//1st version

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const RoomDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room, checkIn, checkOut } = location.state || {};

//   // If no state data was passed, redirect the user back to the availability page
//   if (!room || !checkIn || !checkOut) {
//     return <p>No room details available. Please select a room from the availability page.</p>;
//   }

//   // return (
//   //   <div>
//   //     <h1>Room Details</h1>
//   //     <h2>{room.name}</h2>
//   //     <p>{room.description}</p>
//   //     <p>Price: {room.price}</p>
//   //     <p><strong>Check-in:</strong> {checkIn.toDateString()}</p>
//   //     <p><strong>Check-out:</strong> {checkOut.toDateString()}</p>

//   //     <button onClick={() => navigate(-1)}>Go Back</button> {/* This button can take the user back */}
//   //   </div>
//   // );

//   // Calculate the number of nights
//   const checkInDate = new Date(checkIn);
//   const checkOutDate = new Date(checkOut);
//   const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
//   const numberOfNights = Math.round((checkOutDate - checkInDate) / oneDay);

//   // Calculate total payment
//   const totalPayment = numberOfNights * room.price;

//   const handlePayNow = () => {
//     alert(`Proceeding to payment for ${room.name}. Total payment: $${totalPayment}`);
//     // Navigate to payment or confirmation page, passing the totalPayment data
//     navigate('/payment', { state: { room, checkIn, checkOut, totalPayment } });
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
//       {/* Room Details Container */}
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
//           {room.name}
//         </h1>
//         <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{room.description}</p>
        
//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Price per night:</strong> ${room.price}
//         </p>
        
//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Check-in:</strong> {checkInDate.toDateString()}
//         </p>
        
//         <p style={{ marginBottom: '1.5rem' }}>
//           <strong>Check-out:</strong> {checkOutDate.toDateString()}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Total Nights:</strong> {numberOfNights} night(s)
//         </p>

//         <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
//           <strong>Total Payment:</strong> ${totalPayment}
//         </p>

//         {/* Pay Now Button */}
//         <button
//           onClick={handlePayNow}
//           style={{
//             padding: '1rem',
//             borderRadius: '4px',
//             border: 'none',
//             backgroundColor: '#F2F3A4',
//             color: 'black',
//             cursor: 'pointer',
//             fontSize: '1.2rem',
//             transition: 'background-color 0.3s, color 0.3s',
//             width: '100%',
//             textAlign: 'center',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = 'grey';
//             e.currentTarget.style.color = 'white';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#F2F3A4';
//             e.currentTarget.style.color = 'black';
//           }}
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomDetailsPage;

// 2nd version

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const RoomDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room, checkIn, checkOut } = location.state || {};

//   // If no state data was passed, redirect the user back to the availability page
//   if (!room || !checkIn || !checkOut) {
//     return <p>No room details available. Please select a room from the availability page.</p>;
//   }

//   // Calculate the number of nights
//   const checkInDate = new Date(checkIn);
//   const checkOutDate = new Date(checkOut);
//   const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
//   const numberOfNights = Math.round((checkOutDate - checkInDate) / oneDay);

//   // Extract the numeric value from the price (remove '$' and '/night')
//   const pricePerNight = parseFloat(room.price.replace(/[^0-9.-]+/g,""));

//   // Calculate total payment
//   const totalPayment = numberOfNights * pricePerNight;

//   const handlePayNow = () => {
//     alert(`Proceeding to payment for ${room.name}. Total payment: $${totalPayment}`);
//     // Navigate to payment or confirmation page, passing the totalPayment data
//     navigate('/payment', { state: { room, checkIn, checkOut, totalPayment } });
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
//       {/* Room Details Container */}
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
//           {room.name}
//         </h1>
//         <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{room.description}</p>
        
//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Price per night:</strong> ${pricePerNight}
//         </p>
        
//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Check-in:</strong> {checkInDate.toDateString()}
//         </p>
        
//         <p style={{ marginBottom: '1.5rem' }}>
//           <strong>Check-out:</strong> {checkOutDate.toDateString()}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Total Nights:</strong> {numberOfNights} night(s)
//         </p>

//         <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
//           <strong>Total Payment:</strong> ${totalPayment.toFixed(2)}
//         </p>

//         {/* Pay Now Button */}
//         <button
//           onClick={handlePayNow}
//           style={{
//             padding: '1rem',
//             borderRadius: '4px',
//             border: 'none',
//             backgroundColor: '#F2F3A4',
//             color: 'black',
//             cursor: 'pointer',
//             fontSize: '1.2rem',
//             transition: 'background-color 0.3s, color 0.3s',
//             width: '100%',
//             textAlign: 'center',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = 'grey';
//             e.currentTarget.style.color = 'white';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#F2F3A4';
//             e.currentTarget.style.color = 'black';
//           }}
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomDetailsPage;

//3rd version

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const RoomDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { room, checkIn, checkOut } = location.state || {};

//   if (!room || !checkIn || !checkOut) {
//     return <p>No room details available. Please select a room.</p>;
//   }

//   // Calculate the number of nights
//   const checkInDate = new Date(checkIn);
//   const checkOutDate = new Date(checkOut);
//   const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
//   const numberOfNights = Math.round((checkOutDate - checkInDate) / oneDay);

//   // Extract numeric value from room.price (e.g., "$120/night" -> 120)
//   const pricePerNight = parseFloat(room.price.replace(/[^0-9.-]+/g, ""));

//   // Calculate total payment
//   const totalPrice = numberOfNights * pricePerNight;

//   const handlePayNow = () => {
//     alert(`Proceeding to payment for ${room.name}. Total payment: $${totalPrice}`);
//     // Navigate to payment or confirmation page, passing the totalPayment data
//     navigate('/Confirmed', { state: { room, checkIn, checkOut, totalPrice } });
//   };

//   const handleCancel = () => {
//     // Redirect back to available room list with checkIn and checkOut data
//     navigate('/AvailableList', { state: { checkIn, checkOut } });
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
//       {/* Room Details Container */}
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
//           {room.name}
//         </h1>
//         <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{room.description}</p>
        
//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Price per night:</strong> ${pricePerNight}
//         </p>
        
//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Check-in:</strong> {checkInDate.toDateString()}
//         </p>
        
//         <p style={{ marginBottom: '1.5rem' }}>
//           <strong>Check-out:</strong> {checkOutDate.toDateString()}
//         </p>

//         <p style={{ marginBottom: '1rem' }}>
//           <strong>Total Nights:</strong> {numberOfNights} night(s)
//         </p>

//         <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
//           <strong>Total Payment:</strong> ${totalPrice}
//         </p>

//         {/* Button Container for Cancel and Pay Now */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
//           {/* Cancel Button */}
//           <button
//             onClick={handleCancel}
//             style={{
//               padding: '0.5rem 1rem',
//               borderRadius: '4px',
//               border: 'none',
//               backgroundColor: '#f44',
//               color: 'white',
//               cursor: 'pointer',
//               fontSize: '1rem',
//               transition: 'background-color 0.3s, color 0.3s',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#d33';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = '#f44';
//             }}
//           >
//             Cancel
//           </button>

//           {/* Pay Now Button */}
//           <button
//             onClick={handlePayNow}
//             style={{
//               padding: '0.5rem 1rem',
//               borderRadius: '4px',
//               border: 'none',
//               backgroundColor: '#F2F3A4',
//               color: 'black',
//               cursor: 'pointer',
//               fontSize: '1rem',
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
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomDetailsPage;

//4th version

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RoomDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, checkIn, checkOut, userId } = location.state || {};
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!room || !checkIn || !checkOut) {
    return <p>No room details available. Please select a room.</p>;
  }

  // Calculate the number of nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const numberOfNights = Math.round((checkOutDate - checkInDate) / oneDay);

  // Extract numeric value from room.price (e.g., "$120/night" -> 120)
  const pricePerNight = parseFloat(room.price.replace(/[^0-9.-]+/g, ""));
  
  // Calculate total payment
  const totalPrice = numberOfNights * pricePerNight;

  const handlePayNow = async () => {
    setLoading(true);
    setError(null);

    const bookingDetails = {
      userId: userId, // Pass user ID
      checkInDate: checkIn,
      checkOutDate: checkOut,
      packageId: room.packageId, // Assuming room has a packageId field
      addOns: [], // Add any add-ons here if applicable
      totalPrice: totalPrice,
      paymentConfirmed: false // Set to true later after payment confirmation
    };

     try {
      // Make POST request to create a booking
      const response = await axios.post('http://localhost:8080/api/bookings/details', bookingDetails);
      const bookingId = response.data.id;

      // Navigate to the confirmation page, passing bookingId via state
      navigate('/Confirmed', { state: { bookingId } });
    } catch (error) {
      setError('Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem', backgroundColor: '#f4f4f4' }}>
      {/* Room Details Container */}
      <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#F2F3A4' }}>{room.name}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{room.description}</p>
        <p><strong>Price per night:</strong> ${pricePerNight}</p>
        <p><strong>Check-in:</strong> {checkInDate.toDateString()}</p>
        <p><strong>Check-out:</strong> {checkOutDate.toDateString()}</p>
        <p><strong>Total Nights:</strong> {numberOfNights} night(s)</p>
        <p style={{ fontWeight: 'bold' }}><strong>Total Payment:</strong> ${totalPrice}</p>

        {/* Pay Now Button */}
        <button
          onClick={handlePayNow}
          style={{ padding: '1rem', borderRadius: '4px', backgroundColor: '#F2F3A4', cursor: 'pointer', width: '100%', textAlign: 'center' }}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>

        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </div>
    </div>
  );
};

export default RoomDetailsPage;
