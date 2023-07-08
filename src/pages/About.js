import React, { useContext } from 'react';
import WomenImg from '../img/about/about.png'
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section initial={{ opacity: 0, y: '-80%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-80%' }} transition={transition1}
      className='section'>
      <div
        className='container relative h-screen mx-auto'>
        <div className='flex flex-col items-center justify-center w-full h-full text-center lg:flex-row gap-x-14 lg:text-left lg:pt-16'>

          <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-50%' }} transition={transition1}
            onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
            className='z-10 flex flex-col items-center justify-center flex-1 pt-20 pb-14 lg:pt-0 lg:w-auto lg:items-start'>
            <h1 className='h1'>About Me</h1>
            <p className='max-w-sm mb-10'>Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Non nam sequi suscipit distinctio accusantium ut officiis hic corrupti atque minus!
              <br />
              <br />
              Lorem, ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Porro, qui.
            </p>
            <Link to={'/portfolio'} className='btn'>
              View my Work</Link>
          </motion.div>

          <div className='flex-1 order-2 overflow-hidden max-h-96 lg:max-h-max lg:order-none lg:pb-2'>
            <img src={WomenImg} alt="Women About" />
          </div>
        </div>
      </div>
    </motion.section >
  );
};

export default About;
