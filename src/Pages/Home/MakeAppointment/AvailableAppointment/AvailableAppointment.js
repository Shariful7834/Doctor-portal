import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../../BookingModal/BookingModal";
import Loading from "../../../Shared/Loading/Loading";
import AvailableOption from "./AvailableOption";

const AvailableAppointment = ({ selectedDate }) => {
  // const [availableAppointments, setAvailableAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: availableAppointments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["availableAppointments", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctor-portal-server-bice-xi.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("https://doctor-portal-server-bice-xi.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAvailableAppointments(data));
  // }, []);

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

      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
