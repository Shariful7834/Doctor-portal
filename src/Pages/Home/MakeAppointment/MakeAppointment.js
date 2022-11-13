import React, { useEffect } from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";
import PrimaryButton from "../../../components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      data-aos="fade-up"
      className="hero mt-40"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero-content flex-col lg:flex-row -mb-4">
        <img
          src={doctor}
          className="lg:w-1/2 -mt-40 rounded-lg hidden md:block lg:block "
          alt=""
        />
        <div>
          <h3 className="text-primary text-2xl mb-4 font-bold">Appointment</h3>
          <h1 className="text-4xl font-bold text-white">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
