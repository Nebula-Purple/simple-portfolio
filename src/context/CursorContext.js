import React, { createContext, useEffect, useState } from 'react';


export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorBg, setCursorBg] = useState('default');
  const [cursorUser, setCursorUser] = useState({
    x: 0, y: 0,
  });

  const mobileViewActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewActive) {
      const move = (e) => {
        setCursorUser({
          x: e.clientX,
          y: e.clientY,
        })
      }
      window.addEventListener('mousemove', move);

      return () => {
        window.removeEventListener('mousemove', move);
      }
    } else {
      setCursorBg('none');
    }
  }, [mobileViewActive]);

  const cursorVariants = {
    default: {
      x: cursorUser.x - 16,
      y: cursorUser.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorUser.x - 72,
      y: cursorUser.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255, 1)'
    }
  };

  const mouseEnterHandler = () => {
    setCursorBg('text');
  };

  const mouseLeaveHandler = () => {
    setCursorBg('default');
  };

  return <CursorContext.Provider value={{ cursorVariants, cursorBg, mouseEnterHandler, mouseLeaveHandler }}>
    {children}
  </CursorContext.Provider>

}

export default CursorProvider;
