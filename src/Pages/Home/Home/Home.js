import React from "react";
import CardsInfo from "../../CardsInfo/CardsInfo";
import ServiceCards from "../../ServiceCards/ServiceCards";
import BottomFooter from "../../Shared/Footer/BottomFooter";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HeroContent from "../HeroContent/HeroContent";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <ServiceCards></ServiceCards>
      <HeroContent></HeroContent>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
