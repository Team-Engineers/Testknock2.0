import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React, { useEffect } from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <>
    <Navbar/>
      <Component />
      <Footer/>
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withLayout(Home)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;