import React, { useContext } from 'react';
import WomenImg from '../img/contact/contact.png'

import { motion } from 'framer-motion';
import { transition1 } from '../transitions'
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section initial={{ opacity: 0, y: '-80%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-80%' }} transition={transition1}
      className='section'>
      <div
        className='container h-full mx-auto'>
        <div className='flex flex-col items-center justify-start h-full text-center lg:flex-row pt-36 gap-x-8 lg:text-left'>

          <motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-80%' }} transition={transition1} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
            className='px-4 lg:flex-1 lg:pt-32'>
            <div className='h1'>Contact Me</div>
            <p className='mb-12'>I would love to get suggestion from you.</p>
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="text" placeholder='Your Name' />
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type="text" placeholder='Your Email Adress' />
              </div>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type="text" placeholder='Your Message' />
              <button type='submit' className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send Message</button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'>
            <img
              src={WomenImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
