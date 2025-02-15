import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './card-slider.css';
import x50Car from './assets/x50-car.png'
import x70Car from './assets/x70-car.png'
import x90Car from './assets/x90-car.png'
import s70Car from './assets/s70-car.png'
import personaCar from './assets/persona-car.png'
import sagaCar from './assets/saga-car.png'
import irizCar from './assets/iriz-car.png'
import exoraCar from './assets/exora-car.png'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

// Define a list of car data
const carData = [
  {
    name: "X50",
    type: "Compact Crossover SUV",
    imageUrl: x50Car,
  },
  {
    name: "X70",
    type: "Mid-size SUV",
    imageUrl: x70Car,
  },
  {
    name: "X90",
    type: "Full-size SUV",
    imageUrl: x90Car,
  },
  {
    name: "S70",
    type: "Mid-size Sedan",
    imageUrl: s70Car,
  },
  {
    name: "PERSONA",
    type: "Compact Sedan",
    imageUrl: personaCar,
  },
  {
    name: "SAGA",
    type: "Compact Sedan",
    imageUrl: sagaCar,
  },
  {
    name: "IRIZ",
    type: "Hatchback",
    imageUrl: irizCar,
  },
  {
    name: "EXORA",
    type: "MPV",
    imageUrl: exoraCar,
  },
];

export default function SwiperApp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected car image

  // Handle card click to set the selected image
  const handleCardClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the selected car's image URL
    onOpen(); // Open the modal
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
          // Disable slide for screens larger than 1024px (desktop)
          1024: {
            allowTouchMove: false, // Disable sliding on desktop
          },
          // Enable slide for mobile screens
          1023: {
            allowTouchMove: true, // Enable sliding on mobile
          },
        }}
      >
        {carData.map((car, index) => (
          <SwiperSlide key={index}>
            <Card
              className="py-4 w-[300px] bg-stone-50"
              shadow="none"
              isPressable
              isHoverable
              onPress={() => handleCardClick(car.imageUrl)} // Open modal on card press
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal to display selected car image */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur" size='5xl'>
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader />
              {selectedImage && (
                <Image
                  alt="Car image"
                  className="object-cover py-11"
                  src={selectedImage} // Display the selected image
                />
              )}
              <ModalFooter />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
