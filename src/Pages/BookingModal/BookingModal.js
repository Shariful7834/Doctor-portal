import { format } from "date-fns/esm";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const slots = form.slots.value;
    const phone = form.phone.value;
    // console.log(date, name, email, slots);

    const booking = {
      appointmentDate: date,
      name,
      email,
      slots,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              type="text"
              placeholder="Date"
              name="date"
              value={date}
              className="input input-bordered w-full "
            />
            <select name="slots" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option selected value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full "
            />
            <input className="btn btn-accent w-full" type="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
