import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide"
import StaffPages from "./StaffPages";
import Reservation from "./FrontEnd/others/reservation"
import Home from "./FrontEnd/tab/Home"
import Package from "./FrontEnd/tab/Package"
import Catalogue from "./FrontEnd/tab/Catalogue"
import AboutUs from "./FrontEnd/tab/AboutUs"
import CouplePackage from "./FrontEnd/tab/Packages/CouplePackage"
import Availability from "./FrontEnd/others/Availability"
import AvailableList from "./FrontEnd/others/AvailableList"
import ConfirmedPage from './FrontEnd/others/Confirmed';


const App = () => {
  return (

    <>
    
    <Routes>
    <Route
        path="/SignIn"
        element={
            <SignInSide />
        }
      />

    <Route 
        path="/reservation"
        element={
            <Reservation/>} />

    <Route
        path="/Home"
        element={
             <Home/>}  />

    <Route
        path="/Package"
        element={
             <Package/>}  />

    <Route
        path="/CouplePackage"
        element={
             <CouplePackage/>}  /> 

    <Route
        path="/Availability"
        element={
             <Availability/>}  /> 

    <Route
        path="/AvailableList"
        element={
             <AvailableList/>}  /> 

    {/* <Route
        path="/Confirmed"
        element={
            <ConfirmedPage />} /> */}

    <Route path="/Confirmed" element={<ConfirmedPage />} />

    <Route
        path="/Catalogue"
        element={
             <Catalogue/>}  />   

   <Route
        path="/AboutUs"
        element={
             <AboutUs/>}  />
             

    <Route 
        path="/Admin"
        element={
              <AdminPages />} />
    
   
    <Route 
        path="/Staff"
        element={
              <StaffPages />}/>
    
     </Routes>
     <AdminPages />
     <StaffPages /> 
     </>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AdminPages from "./AdminPages";
// import SignInSide from "./FrontEnd/login/SignInSide";
// import StaffPages from "./StaffPages";
// import Reservation from "./FrontEnd/others/reservation";
// import Home from "./FrontEnd/tab/Home";
// import Package from "./FrontEnd/tab/Package";
// import Catalogue from "./FrontEnd/tab/Catalogue";
// import AboutUs from "./FrontEnd/tab/AboutUs";
// import CouplePackage from "./FrontEnd/tab/Packages/CouplePackage";
// import Availability from "./FrontEnd/others/Availability";
// import AvailableList from "./FrontEnd/others/AvailableList";
// import ConfirmedPage from './FrontEnd/others/Confirmed';

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/SignIn" element={<SignInSide />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Package" element={<Package />} />
//         <Route path="/CouplePackage" element={<CouplePackage />} />
//         <Route path="/Availability" element={<Availability />} />
//         <Route path="/AvailableList" element={<AvailableList />} />
//         <Route path="/Confirmed" element={<ConfirmedPage />} />
//         <Route path="/Catalogue" element={<Catalogue />} />
//         <Route path="/AboutUs" element={<AboutUs />} />
//         <Route path="/Admin" element={<AdminPages />} />
//         <Route path="/Staff" element={<StaffPages />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
