import React from "react";

const AvailableOption = ({ option, setTreatment }) => {
  const { name, slots } = option;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-center text-2xl font-bold text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 0 ? "spaces" : "space"}
        </p>
        <div className="card-actions justify-center mt-3">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary  text-white"
            onClick={() => setTreatment(option)}
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableOption;
