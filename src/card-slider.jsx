import {Card, CardHeader, CardBody, Image} from "@heroui/react";


// Define a list of car data
const carData = [
    {
      name: "X50",
      type: "Compact SUV",
      imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      name: "Y200",
      type: "Luxury Sedan",
      imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      name: "Z900",
      type: "Sport Coupe",
      imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    },
  ];

  export default function CardSliderComp() {
    return (
        <>
      <div className="flex flex-wrap justify-center items-center my-10 gap-5">
        {carData.map((car, index) => (
          <Card
            key={index}
            className="py-4 w-[300px] bg-stone-50"
            shadow="none"
            isPressable
            isHoverable
            onClick={() => console.log('onclick')}
            onTouchEnd={() => console.log('ontouch')}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{car.name}</h4>
              <small className="text-default-500">{car.type}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Car image"
                className="object-cover rounded-xl"
                src={car.imageUrl}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
        
      </div>
      </>
    );
  }