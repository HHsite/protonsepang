import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import x50Car from './assets/x50-car.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@heroui/react";
import './card-slider.css';

export default function FeedbackComponent() {
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsAtEnd(swiper.isEnd);
    setIsAtStart(swiper.isBeginning);
  };

  return (
    <>
      <div className="px-4 bg-white">
        <div className="container py-14">
          <Swiper
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={1}
            modules={[Navigation]}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
            className="bg-blue-200 !h-[300px] !pb-0"
          >
            <SwiperSlide><img className="bg-red-200 !h-auto" src={x50Car}/></SwiperSlide>
            <SwiperSlide className="!absolute left-[800px]"><img className="bg-blue-600 !h-auto" src={x50Car}/></SwiperSlide>
            <SwiperSlide><img className="bg-red-200 !h-auto" src={x50Car}/></SwiperSlide>
            <SwiperSlide><img className="bg-red-200 !h-auto" src={x50Car}/></SwiperSlide>
            <SwiperSlide><img className="bg-red-200 !h-auto" src={x50Car}/></SwiperSlide>
            <SwiperSlide><img className="bg-red-200 !h-auto" src={x50Car}/></SwiperSlide>






          </Swiper>
          <div className="flex flex-row">
          <Button
            className={`button-prev-slide w-10 h-10 ${
              isAtStart ? "bg-gray-300" : "bg-red-400"
            }`}
          >
            Prev
          </Button>
          <Button
            className={`button-next-slide w-10 h-10 ${
              isAtEnd ? "bg-gray-300" : "bg-red-400"
            }`}
          >
            Next
          </Button>
          </div>
          
        </div>
      </div>
    </>
  );
}
