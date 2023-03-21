import React from 'react'

const News = () => {
  return (
    <div id='news' className='flex flex-col justify-center items-start gap-4 mt-20 bg-verydarkblue text-white p-4 max-w-[768px] mx-auto md:max-w-[768px] md:mt-0 md:min-h-full'>
        <h1 className='font-extrabold text-3xl text-softorange mb-2'>New</h1>
        <div className='border-b-[1px] '>
            <h2 className='font-bold text-xl mb-2 hover:text-softorange cursor-pointer transition-colors '>Hydrogen vs Electric Cars</h2>
            <p className='mb-2 text-grayishblue leading-8'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='border-b-[1px] '>
            <h2 className='font-bold text-xl mb-2 hover:text-softorange cursor-pointer transition-colors '>The Downsides of AI Artistry</h2>
            <p className='mb-2 text-grayishblue leading-8'>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className=''>
            <h2 className='font-bold text-xl mb-2 hover:text-softorange cursor-pointer transition-colors '>Is VC Funding Drying UP?</h2>
            <p className='mb-2 text-grayishblue leading-8'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    </div>
  )
}

export default News