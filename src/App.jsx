import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbarSection from './navbar'
import CardSliderComp from './card-slider'
import SwiperApp from './card-swiper'
import HeroSection from './hero-component'
import FloatingActionButton from './floatingAction'


function App() {

  return (
    <>
      <FloatingActionButton />
      <NavbarSection />
      <HeroSection />
      <SwiperApp />
    </>
  )
}

export default App
