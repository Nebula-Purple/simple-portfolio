import React, { useContext } from 'react';
import Image1 from '../img/portfolio/project1.jpg'
import Image2 from '../img/portfolio/project2.jpg'
import Image3 from '../img/portfolio/project3.png'
import Image4 from '../img/portfolio/project4.jpg'
import { css, figma, git, html, javascript, mongodb, nodejs, reactjs, tailwind } from '../img/tech'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={transition1}
      className='flex items-center justify-center w-4/5 h-screen m-auto section'>
      <div className='container relative flex flex-col h-full mx-auto gap-y-1'>
        <div className='flex flex-col items-center justify-start h-full pt-24 pb-8 text-center lg:flex-row gap-x-24 lg:text-left'>
          <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} initial={{ opacity: 0, y: '-80%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-80%' }} transition={transition1}
            className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='max-w-sm mb-12'>Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Non nam sequi suscipit distinctio accusantium ut officiis hic corrupti atque minus!
              <br />
              Lorem, ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Porro, qui.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0 lg:items-start'>
              Hire Me</Link>
          </motion.div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ opacity: 0 }} transition={transition1}
            className='grid grid-cols-2 lg:gap-2 sm:gap-1 rounded-[5px] gap-1'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image1} alt="Gallery"
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image2} alt="Gallery"
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image3} alt="Gallery"
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img src={Image4} alt="Gallery"
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              />
            </div>
          </motion.div>
        </div>

        <motion.div className="relative text-center gap-y-1">
          <h1 onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
            className="pt-2 text-xl font-semibold md:text-3xl">
            Tech Stack
          </h1>
          <div
            className="flex flex-wrap justify-center w-full mx-auto my-16 md:w-2/3 gap-x-10 md:gap-y-6"
          >
            <img src={html} alt="logo" className="w-12 h-12" />
            <img src={css} alt="logo" className="w-12 h-12" />
            <img src={javascript} alt="logo" className="w-12 h-12" />
            <img src={nodejs} alt="logo" className="w-12 h-12" />
            <img src={reactjs} alt="logo" className="w-12 h-12" />
            <img src={tailwind} alt="logo" className="w-12 h-12" />
            <img src={figma} alt="logo" className="w-12 h-12" />
            <img src={mongodb} alt="logo" className="w-12 h-12" />
            <img src={git} alt="logo" className="w-12 h-12" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Portfolio;
