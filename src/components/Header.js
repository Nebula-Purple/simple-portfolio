import React, { useContext } from 'react';
import Socials from './Socials'
import MobileNav from './MobileNav'
import { Link } from 'react-router-dom'
import { CursorContext } from '../context/CursorContext';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col justify-between w-full lg:flex-row lg:items-center'>
        <Link to={'/'} className='logo max-w-[200px]'>
          <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          >Johanez_</motion.h1>
        </Link>

        <nav onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
          className="font-semibold hidden xl:flex gap-x-12">
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition hover:scale-150'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition hover:scale-150'>
            About
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition hover:scale-150'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition hover:scale-150'>
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  )
    ;
};

export default Header;
