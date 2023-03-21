import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import News from './components/News'
import Card from './components/Card'

import RetroPcs from './assets/image-retro-pcs.jpg'
import TopLaptops from './assets/image-top-laptops.jpg'
import GamingGrowth from './assets/image-gaming-growth.jpg'

const App = () => {
  return (
    <div id="container" className='max-w-[70rem] mx-auto'>
      <Nav />
      <div id="grid" className='md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4'>
        <div className='md:col-start-1 md:col-end-3 md:row-span-2'>
          <Hero />
        </div>

        <div className='md:col-span-1 md:row-span-2'>
          <News />
        </div>

          <div>
            <Card
              number= '01'
              title='retro PCs'
              description= 'What happens when old PCs are given modern upgrades?'
              img={RetroPcs}
              />
            </div>

            <div>
              <Card
              number= '02'
              title='Top 10 Laptops of 2022'
              description= 'Our best picks of various needs and budgets.'
              img={TopLaptops}
              />
            </div>

            <div>
              <Card
              number= '03'
              title='The Growth of Gaming'
              description= 'How the pandemic has sparked fresh opportunities.'
              img={GamingGrowth}
              />
            </div>
            
          </div>
    </div>
  )
}

export default App