import React from 'react'
import RetroPcs from '../assets/image-retro-pcs.jpg'


const Card = ({ number, title, description, img }) => {
  return (
    <div className='flex justify-start items-center gap-4 mt-12 md:flex-col md:items-start lg:flex-row'>
        <img src={img} alt=""  className='max-w-[10rem]'/>
        <div className='flex flex-col justify-between items-start gap-4'>
            <h1 className='font-extrabold text-5xl text-grayishblue'>{number}</h1>
            <h1 className='font-bold text-2xl hover:text-softred cursor-pointer transition-colors'>{title}</h1>
            <h1 className='text-darkgrayishblue'>{description}</h1>
        </div>
    </div>
  )
}

export default Card