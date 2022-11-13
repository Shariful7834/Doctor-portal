import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../../BookingModal/BookingModal";
import AvailableOption from "./AvailableOption";

const AvailableAppointment = ({ selectedDate }) => {
  const [availableAppointments, setAvailableAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAvailableAppointments(data));
  }, []);

  return (
    <section>
      <p className="text-center font-semibold text-primary my-16">
        Available Appointment on {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {availableAppointments.map((option) => (
          <AvailableOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AvailableOption>
        ))}
      </div>

      {treatment && <BookingModal treatment={treatment} selectedDate ={selectedDate}></BookingModal>}
    </section>
  );
};

export default AvailableAppointment;
