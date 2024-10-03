import { hotelres, airbnb } from "../../assets/images";

const Reservation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={hotelres} style={{ width: '40%' }} alt="Hotel Reservation" />
      <img src={airbnb} style={{ width: '40%' }} alt="Airbnb" />
      <h1 style={{ color: 'red', fontStyle: 'italic', fontSize: '3rem' }}>
        This is the Reservation
      </h1>
    </div>
  );
};

export default Reservation;
