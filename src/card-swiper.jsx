import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './card-slider.css';
import x50Car from './assets/x50-car.png';
import x70Car from './assets/x70-car.png';
import x90Car from './assets/x90-car.png';
import s70Car from './assets/s70-car.png';
import personaCar from './assets/persona-car.png';
import sagaCar from './assets/saga-car.png';
import irizCar from './assets/iriz-car.png';
import exoraCar from './assets/exora-car.png';

const carData = [
  { name: "X50", type: "Compact Crossover SUV", imageUrl: x50Car, url: x50Car},
  { name: "X70", type: "Mid-size SUV", imageUrl: x70Car, url: x70Car },
  { name: "X90", type: "Full-size SUV", imageUrl: x90Car, url: x90Car },
  { name: "S70", type: "Mid-size Sedan", imageUrl: s70Car, url: s70Car },
  { name: "PERSONA", type: "Compact Sedan", imageUrl: personaCar, url: personaCar },
  { name: "SAGA", type: "Compact Sedan", imageUrl: sagaCar, url: sagaCar },
  { name: "IRIZ", type: "Hatchback", imageUrl: irizCar, url: irizCar },
  { name: "EXORA", type: "MPV", imageUrl: exoraCar, url: exoraCar },
];

export default function SwiperApp() {

  const handlePress = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <p className="text-center mt-10 font-bold text-xl">Explore our Proton</p>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="w-[90%] sm:w-[80%] my-10"
        breakpoints={{
          1024: { allowTouchMove: false },
          1023: { allowTouchMove: true },
        }}
      >
        {carData.map((car, index) => (
          <SwiperSlide key={index}>
            {/* <a href='#' target='_blank'> */}
            <Card
              className="py-4 w-[300px] h-[280px] bg-stone-50"
              shadow="none"
              isHoverable
              isPressable
              onPress={() => handlePress(car.url)}
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{car.name}</h4>
                <small className="text-default-500">{car.type}</small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Car image"
                  className="object-cover py-11 rounded-xl bg-transparent"
                  src={car.imageUrl}
                  width={270}
                />
              </CardBody>
            </Card>
            {/* </a> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}