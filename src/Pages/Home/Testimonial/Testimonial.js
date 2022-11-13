import React, { useEffect } from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
import ReviewTestimonial from "./ReviewTestimonial";
import Aos from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const testimonialData = [
    {
      id: "1",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      title: "Willim Smith",
      location: "Dortmund",
    },
    {
      id: "2",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      title: "Anthony Cruiz",
      location: "Munich",
    },
    {
      id: "3",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      title: "Jessica",
      location: "Dusseldorf",
    },
  ];
  return (
    <div className="my-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl text-primary font-semibold">Testimonial</h4>
          <h2 className="text-5xl font-bold">What Our Patients Says</h2>
        </div>
        <img className=" lg:w-36 w-24" src={quote} alt="" />
      </div>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {testimonialData.map((review) => (
          <ReviewTestimonial
            key={review.id}
            review={review}
          ></ReviewTestimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
