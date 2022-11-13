import React from "react";

const ReviewTestimonial = ({ review }) => {
  const { title, img, description, location } = review;
  return (
    <div data-aos="zoom-in-up" className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex mt-5 ">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="font-semibold"> {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTestimonial;
