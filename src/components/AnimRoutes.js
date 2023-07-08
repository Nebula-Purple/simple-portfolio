import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import Porfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Porfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
};

export default AnimRoutes;