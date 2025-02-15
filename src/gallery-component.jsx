import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Card, CardHeader, CardBody, Image} from "@heroui/react";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const custImg = Object.entries(
  import.meta.glob("/src/assets/customer/*.{jpg,png,jpeg,gif,webp}", { eager: true })
).map(([path, module]) => ({
  name: path.split("/").pop(), // Extract filename
  url: module.default
}));

export default function GalleryComponent() {
  return (
    <>
      <div className='py-10'>
        <div className='w-[90%] sm:w-[70%] my-10 mx-auto'>
          <p className="text-center my-10 font-bold text-2xl">Galeri Pelanggan Proton Sepang</p>
          <p className='text-center'>Terima kasih kerana memilih saya sebagai Sales Advisor anda. Saya Harap anda semua berpuas hati dengan perkhidmatan yang diberikan.</p>
          <div className='sm:hidden mt-10'>
            <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
             
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {custImg.map((img, index) => (
              <SwiperSlide key={index}>
              <img
                      
                      className="object-cover !w-[300px] !h-[400px] rounded-xl shadow-lg"
                      src={img.url}
          
                    />
              </SwiperSlide>  
            ))}

            </Swiper>
          </div>
          <div className="hidden sm:grid grid-cols-2 gap-x-1 gap-y-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-10">
            {custImg.map((img, index) => (
              <div key={index} className={`flex justify-center ${index % 2 === 0 ? "mt-0" : "mt-5"}`}>
                <img className="w-72 h-80 object-cover rounded-xl shadow-lg" src={img.url} alt={img.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
