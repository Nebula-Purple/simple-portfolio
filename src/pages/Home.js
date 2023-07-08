import React, { useContext, useEffect, useRef } from 'react';
import WomenImg from '../img/home/hireMe.png'
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { transition1 } from '../transitions'
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Johanez'],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 550,
      smartBackspace: true,
      showCursor: false,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, [])
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition1}
      className='section'>
      <div className='container relative h-full mx-auto'>
        <div className='flex flex-col justify-center'>
          <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-50%' }} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
            className='z-10 flex flex-col items-center justify-start w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto lg:absolute lg:items-center'>
            <h1 className='h1'>
              Hello! <br /> I'M <span ref={el} className='fixed mx-4 lg:m-auto lg:mx-4'></span>
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Website Developer</p>
            <Link to={'/contact'} className='btn mb-[20px]'>Hire Me</Link>
          </motion.div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={transition1}
            className='flex justify-center max-h-96 lg:max-h-max'>
            <div className='relative overflow-hidden lg:-right-40'>
              <motion.img whileHover={{ scale: 1.1 }} transition={transition1} src={WomenImg} alt="Women" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
