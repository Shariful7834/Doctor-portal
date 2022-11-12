import React from "react";
import CardsInfo from "../../CardsInfo/CardsInfo";
import ServiceCards from "../../ServiceCards/ServiceCards";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardsInfo></CardsInfo>
      <ServiceCards></ServiceCards>
    </div>
  );
};

export default Home;
