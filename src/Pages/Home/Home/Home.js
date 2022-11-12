import React from "react";
import CardsInfo from "../../CardsInfo/CardsInfo";
import ServiceCards from "../../ServiceCards/ServiceCards";
import Banner from "../Banner/Banner";
import HeroContent from "../HeroContent/HeroContent";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <ServiceCards></ServiceCards>
      <HeroContent></HeroContent>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
