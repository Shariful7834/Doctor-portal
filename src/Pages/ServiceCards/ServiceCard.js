import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ServiceCard = ({ sCard }) => {
  const { id, icon, description, title } = sCard;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="card w-96 bg-base-100 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={icon} alt="icons" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
