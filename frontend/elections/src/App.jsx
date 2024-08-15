import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import Electoral from "./components/Electoral-lists/Electoral";
import AboutUS from "./components/AboutUs/AboutUS";
import ContactUS from "./components/ContactUs/ContactUS";
import Login from "./components/Login/Login";
import LoginForm from "./components/SignIn/LoginForm";
import PartyListsPage from "./components/PartyListsPage/PartyListsPage";
import LocalLists from "./components/LocalLists/LocalLists";
import ElectoralDistricts from "./components/ElectoralDistricts/ElectoralDistricts";
import ElectionRequests from "./components/Elections Requests/electionsRequests";
import PaymentComponent from "./components/PaymentComponent/Payment";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electoral" element={<Electoral />} />
        <Route path="/requests" element={<ElectionRequests />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/local-lists" element={<LocalLists />} />
        <Route path="/party-lists" element={<PartyListsPage />} />
        <Route path="/circle" element={<ElectoralDistricts />} />
        <Route path="/party-lists" element={<PartyListsPage />} />
        <Route path="/PaymentComponent" element={<PaymentComponent />} />


      </Routes>
    </Router>
  );
};

export default App;
