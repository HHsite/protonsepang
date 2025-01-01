import React from "react";
import HeroBG from './assets/banner-service.jpg'
import {Button} from "@nextui-org/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function HeroSection() {
  const handlePress = () => {
    window.open('https://wa.me/+601129006155', '_blank');
  };

  return (
    <>
     <section className="relative">
     <img
        src={HeroBG} // Use the imported image
        alt="Hero Background"
        className="object-cover min-h-[80vh] max-h-[80vh] w-full" // Tailwind classes for styling
      />
        
        <div className="absolute w-full text-center top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 md:text-left md:transform-none md:translate-x-0 md:translate-y-0 md:bottom-0 md:left-0 flex flex-col md:items-end md:top-auto md:p-6">
          <p className="text-md text-white">Selamat Datang ke</p>
          <p className="text-4xl font-bold text-white mb-2">Proton Sepang</p>
          <p className="text-md font-bold text-white md:mb-14">Saya Irnee, Proton Sales Advisor anda 😊</p>
          <Button className="font-semibold hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 text-white animate-bounce"  size="lg" onPress={handlePress}>
            <FontAwesomeIcon className="text-white pr-2" icon={faWhatsapp} size="xl" />
            Contact Me!
          </Button>
        </div>
    </section>
    
  </>
  );
}

