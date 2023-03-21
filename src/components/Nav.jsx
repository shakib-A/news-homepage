import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import iconMenu from '../assets/icon-menu.svg'
import closeMenu from '../assets/icon-menu-close.svg'

const Nav = () => {

    const [showNav ,setShowNav] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        })
    },[])

    const toggleNav = () => {
        setShowNav(!showNav)
    }


  return (
<nav>
    {screenWidth < 768 ? <div id='mobile-nav' className='flex justify-between items-center'>
        <img src={logo} alt="" />
        <img src={iconMenu} alt="" onClick={toggleNav} className='cursor-pointer' />
        {showNav ? 
         <>
            <div id="side-nav" className='flex flex-col items-center top-0 right-0 h-[100%] bg-white w-2/3 fixed'>
                <img src={closeMenu} onClick={toggleNav} alt="" className='self-end mt-8 mr-8 cursor-pointer' />
                <ul className='self-start mt-8 font-medium text-2xl flex flex-col gap-4 ml-12'>
                    <li className='hover:text-softred transition-colors'><a href="#">Home</a></li>
                    <li className='hover:text-softred transition-colors'><a href="#">New</a></li>
                    <li className='hover:text-softred transition-colors'><a href="#">Popular</a></li>
                    <li className='hover:text-softred transition-colors'><a href="#">Trending</a></li>
                    <li className='hover:text-softred transition-colors'><a href="#">Categories</a></li>
                </ul>
            </div>
            <div className='absolute left-0 top-0 bg-black bg-opacity-25 w-1/3 h-[100%]'></div>
        </>
    :   <></>}
    </div>
    :   
    <div id='destop-design' className='flex justify-between items-center mb-4'>
        <img src={logo} alt="" />
        <ul className='flex justify-center items-center gap-4'>
            <li className='hover:text-softred transition-colors'><a href="#">Home</a></li>
            <li className='hover:text-softred transition-colors'><a href="#">New</a></li>
            <li className='hover:text-softred transition-colors'><a href="#">Popular</a></li>
            <li className='hover:text-softred transition-colors'><a href="#">Trending</a></li>
            <li className='hover:text-softred transition-colors'><a href="#">Categories</a></li>
        </ul>
    </div>}
 </nav>
  )
}

export default Nav