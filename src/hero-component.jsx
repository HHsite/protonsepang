import React from "react";
import HeroBG from './assets/banner-service.jpg'
import {Button} from "@nextui-org/button";

export default function HeroSection() {

  return (
    <>
     <section className="relative">
     <img
        src={HeroBG} // Use the imported image
        alt="Hero Background"
        className="object-cover min-h-[80vh] max-h-[80vh] w-full" // Tailwind classes for styling
      />
        
        <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 md:text-left md:transform-none md:translate-x-0 md:translate-y-0 md:bottom-0 md:left-0 md:top-auto md:p-6">
          <p className="text-md text-white">Inspiring Connection</p>
          <p className="text-4xl font-bold text-white md:mb-14">Proton Sepang</p>
          <Button className="font-semibold hidden md:block" color="default"  size="lg" onClick={() => console.log('Action clicked!')}>
            Contact Me!
          </Button>
        </div>


      {/* <div className="flex items-center justify-center md:justify-start absolute top-0 md:top-52 left-0 w-full h-full text-white">
        <div className="text-center md:text-left px-4 md:px-8">
          <p className="text-md">
            Inspiring Connection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-20">
            Proton Sepang
          </h1>          
          <Button className="font-semibold hidden md:block" color="default"  size="lg" onClick={() => console.log('Action clicked!')}>
            Contact Me!
          </Button>
        </div>
      </div> */}
    </section>
    
  </>
  );
}

