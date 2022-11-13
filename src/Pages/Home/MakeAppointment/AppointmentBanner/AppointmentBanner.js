import React from "react";
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import bg from "../../../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div
          className="hero-content flex-col lg:flex-row-reverse justify-between"
          style={{ height: "500px" }}
        >
          <img src={chair} className="max-w-sm  rounded-lg shadow-2xl" alt="" />
          <div className="w-1/2 mr-24">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
      {/* <div className="text-center font-semibold text-primary">
        <p>You have Selected date : {format(selectedDate, "PP")} </p>
      </div> */}
    </header>
  );
};

export default AppointmentBanner;
