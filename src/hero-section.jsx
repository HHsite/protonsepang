import React from "react";
import HeroVideo from './assets/proton-playback.mp4'
import {Button} from "@heroui/button";

export default function HeroSection() {

  return (
    <>
     <section className="relative w-full min-h-[80vh]">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="flex items-center justify-center md:justify-start absolute top-0 md:top-52 left-0 w-full h-full text-white">
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
      </div>
    </section>
    
  </>
  );
}

