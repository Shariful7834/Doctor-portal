import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero 	" style={{ backgroundImage: `url(${bg})` }}>
      <div
        className="hero-content flex-col lg:flex-row-reverse justify-between"
        style={{ height: "600px" }}
      >
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="w-1/2 ">
          <h1 className="text-5xl font-bold">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
