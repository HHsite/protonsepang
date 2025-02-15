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
      <div className='py-20'>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {custImg.map((img, index) => (
        <SwiperSlide>
        <img
                key={index}
                className="object-cover !w-[300px] !h-[400px] rounded-xl"
                src={img.url}
    
              />
        </SwiperSlide>  
      ))}

      </Swiper>
      </div>
    </>
  );
}
