import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/home/Header'; 
import HeroSection from './Components/home/HeroSection';
import Sidebar from './Components/salon/Sidebar';
import Footer from './Components/home/Footer';
import Login from './Components/home/Login';
import Register from './Components/home/Register';

//salon

import AppointmentForm from './Components/salon/AppointmentForm';
import Salonhome from './Components/salon/Salonhome';
import ServiceList from './Components/salon/ServiceList';
import MyAppointmentForm from './Components/salon/MyAppointmentForm';






function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        <Route path="/salon" element={<><Sidebar /><Salonhome /></>} />
        <Route path="/ServiceList" element={<><Sidebar /><ServiceList /></>} />
        <Route path="/AppointmentForm" element={<><Sidebar /><AppointmentForm /></>} />
        <Route path="/MyAppointmentForm" element={<><Sidebar /><MyAppointmentForm /></>} />

      
    
      

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
