import React, { useEffect, useState } from 'react'
import heroImgMobile from '../assets/image-web-3-mobile.jpg'
import heroImgDesktop from '../assets/image-web-3-desktop.jpg'

const Hero = () => {

    const [screenWidth, setscreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setscreenWidth(window.innerWidth)
        })
    },[])

  return (
    <div id='hero' className='flex flex-col justify-center items-start gap-4 mt-4 md:grid md:grid-cols-2 md:grid-rows-2 md:items-center md:mt-0 md:min-h-full'>
       {screenWidth < 768 ? <img src={heroImgMobile} alt="" /> : 
       <img src={heroImgDesktop} alt=""  className='md:col-start-1 md:col-end-3 md:min-h-full'/>}
        
        <h1 className='font-extrabold text-5xl'>The Bright Future of Web 3.0?</h1>
        <div className='flex flex-col items-start justify-end h-full gap-12'>
            <p className='text-darkgrayishblue font-bold'>we dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className='text-white bg-softred uppercase px-8 py-4 mt-4 tracking-[.25em] font-bold hover:bg-verydarkblue transition-colors'>read more</button>
        </div>
    </div>
  )
}

export default Hero