import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Industries2 from './pages/Industries2';
import About from './pages/About';
import Contact from './pages/Contact1';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Client from './pages/Client';
import PrivateRoute from './components/PrivateRoutes';
import Register from './pages/Register';
import Transportation from './pages/Transportation';
import Logistics from './pages/Logistics';
import { Quote } from './pages/Quote';
import { Tracking } from './pages/Tracking';
import IndustryDetail from './pages/IndustryDetail';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries2/>} />
            <Route path="/industries/:id" element={<IndustryDetail/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/services/:id" element={<ServiceDetail/>} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/track" element={<Tracking />} />


            
            {/* Routes privées */}
            <Route element={<PrivateRoute requiredRole="client" />}>
              <Route path="/client" element={<Client />} />
            </Route>
            <Route element={<PrivateRoute requiredRole="admin" />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


