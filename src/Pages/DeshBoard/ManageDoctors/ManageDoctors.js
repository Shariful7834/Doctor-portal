import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: alldoctors = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://doctor-portal-server-bice-xi.vercel.app/managedoctors"
        );
        const data = await res.json();
        return data;
      } catch {
        console.log(error);
      }
    },
  });

  const closeModal = () => {
    setDeletingDoctor(null);
  };
  const deleteHandler = (doctor) => {
    fetch(
      `https://doctor-portal-server-bice-xi.vercel.app/managedoctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successful");
          refetch();
        }
      });
    console.log(doctor);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold"> All Doctors</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {alldoctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doctor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doctor.name}</div>
                    </div>
                  </div>
                </td>
                <td>{doctor.specialty}</td>
                <td>{doctor.email}</td>
                <th>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="ConfirmationModal"
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Do you want to delete?`}
          message={`if you delete, ${deletingDoctor.name}  you cannot be able to undone`}
          closeModal={closeModal}
          successAction={deleteHandler}
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
