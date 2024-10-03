// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import SignInSide from "./FrontEnd/login/SignInSide"
import StaffPages from "./StaffPages";
import Reservation from "./FrontEnd/others/Reservation";

function App() {
  return (
    <>
    <Routes>
    <Route
        path="/"
        element={
            <SignInSide />
        }
      />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
