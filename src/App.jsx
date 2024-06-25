import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect } from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurProducts from "./pages/OurProducts";

function App() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  const withLayout = (Component) => (
    <div className="overflow-hidden">
      <div className="relative z-[100]">
      <Navbar />
      </div>
      <div className="relative z-[10]">
      <Component />
      </div>
      <Footer />
    </div>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={withLayout(Home)} />
        <Route path="portfolio/:website" element={withLayout(Portfolio)} />
        <Route path="/services" element={withLayout(Services)} />
        <Route path="/our-products" element={withLayout(OurProducts)} />
        <Route path="/our-team" element={withLayout(OurTeam)} />
        <Route path="/about" element={withLayout(About)} />
        <Route path="/contact" element={withLayout(Contact)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;