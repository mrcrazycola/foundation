import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLink from './NavbarLink'
import NavbarButton from './NavbarButton'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const NavbarMain = () => {
  const [menuOpen, setMenuOpen]= useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };
  return (
    <nav className='mx-auto w-full fixed  z-20 flex sm:p-0 sm:px-3 md:px-6  shadow bg-white'>
       <div className='flex justify-between w-full mx-auto bg-white items-center'>
       <NavbarLogo></NavbarLogo>
       
       <div className={ `${menuOpen ? "sm:block":"sm:hidden" } lg:block`}>
       <NavbarLink></NavbarLink>
       </div>
       <NavbarButton></NavbarButton>
       </div>
       <div className='flex lg:hidden sm:block items-center justify-center'>
        <button className='text-2xl p-3 text-buttonred' onClick={toggleMenu}>
        <GiHamburgerMenu />
        </button>
        
       </div>
    </nav>
  )
}

export default NavbarMain