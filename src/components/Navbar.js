import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { FaStarOfLife } from "react-icons/fa";
import "./Components.css"
import '../cursor/Zoom.css';

const Navbar = () => {

  const [cursorSize, setCursorSize] = useState(35);
  const [borderColor, setBorderColor] = useState('rgba(0, 0, 0, 0.4)');

  const handleMouseMove = (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  };

  const handleMouseEnter = () => {
    setCursorSize(80);
    setBorderColor('rgba(0, 0, 0, 0.6)');
  };

  const handleMouseLeave = () => {
    setCursorSize(35);
    setBorderColor('rgba(0, 0, 0, 0.4)');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    const links = document.querySelectorAll('.zoom');

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <Container maxWidth={false} className='flex items-center justify-between  pb-6 pt-4 fixed top-0'><a className='text-black no-underline text-2xl zoom' href='#'>imart</a><h1 className='font-black text-5xl fontfamily hidden sm:block zoom'>IJI</h1><div className='flex items-center txt'><FaStarOfLife className='text-[#d28b76] mr-4  icn' /><p className='font-bold zoom'> Menu</p></div>
      </Container>

      <div
        className="cursor"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          borderColor: borderColor,
        }}
      />
    </div>
  )
}

export default Navbar
