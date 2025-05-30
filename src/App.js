import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './main/header';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Privacy from './pages/privacy_policy';
import Service from './pages/service'; 
import AdminService from './pages/admin/addservice'; 
import NotFound from './pages/error/404';
import Server from './pages/error/500';
import Footer from './main/footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes style={{ marginTop: '60rem' }}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/services" element={<Service />} /> 

        <Route path="/admin/add/service" element={<AdminService />} />  {/* Adding Service page route */}
        {/* Adding Service page route */}
        <Route path="*" element={<NotFound />} /> {/* Redirect to Home for any unmatched routes */}
        <Route path="/404" element={<NotFound />} /> {/* Custom 404 page can be added later */}
        <Route path="/500" element={<Server />} /> {/* Custom 500 page can be added later */}
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
