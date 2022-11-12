import { primary, secondary } from "daisyui/src/colors";
import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import Card from "./Card";
const CardsInfo = () => {
  const cardData = [
    {
      id: "01",
      title: "Opening Hours",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      description: "Open 9.00 am to 5.0 pm",
      icon: clock,
    },
    {
      id: "02",
      title: "Visit our location",
      bgClass: "bg-accent",
      description: "Emil-figge str. 44227, Dortmund",
      icon: marker,
    },
    {
      id: "03",
      title: "Contact us now",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
      description: "+4915221472586",
      icon: phone,
    },
  ];

  return (
    <div className=" mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default CardsInfo;
