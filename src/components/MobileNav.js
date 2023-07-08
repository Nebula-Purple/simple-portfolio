import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [.6, .01, -.05, .9],
    }
  }
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      <motion.div variants={menuVariants} initial='hidden' animate={openMenu ? 'show' : ''}
        className="absolute top-20 right-0 z-20 my-2 min-w-[140px] rounded-xl max-w-xs bg-white shadow-2xl">
        <div onClick={() => setOpenMenu(false)} className='absolute top-0 left-0 z-30 text-2xl cursor-pointer text-primary'>
          <IoMdClose />
        </div>
        <ul className='flex flex-col items-center justify-center h-full py-8 text-sm font-bold gap-y-2 text-primary font-primary'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
