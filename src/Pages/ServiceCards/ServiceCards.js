import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const serviceCardData = [
    {
      id: "1",
      title: "Fluoride Treatment",
      description:
        "Treatment for Flouride is the best choice in this service category",
      icon: fluoride,
    },
    {
      id: "2",
      title: "Cavity Treatment",
      description:
        "Cavity for the Teeth is the best choice in this service category",
      icon: cavity,
    },
    {
      id: "3",
      title: "Whitening Treatment",
      description:
        "Whitening for Teeth is the best choice in this service category",
      icon: whitening,
    },
  ];

  return (
    <div >
      <div className="text-center mt-20 mb-10">
        <h3 className="text-2xl text-primary font-bold">Our Services</h3>
        <h2 className="text-4xl font-bold">Service We provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 mt-5">
        {serviceCardData.map((sCard) => (
          <ServiceCard key={sCard.id} sCard={sCard}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
