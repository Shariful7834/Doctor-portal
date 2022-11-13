import React from "react";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton";

const Contact = () => {
  return (
    <div className="text-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-center">
        <h3 className="text-2xl text-primary">Contact Us</h3>
        <h2 className="text-4xl font-semibold"> Stay connected with us</h2>
      </div>
      <div className="text-center my-10">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Your message"
          className="input input-bordered w-full h-24 max-w-xs"
        />
      </div>
      <PrimaryButton>Submit</PrimaryButton>
    </div>
  );
};

export default Contact;
