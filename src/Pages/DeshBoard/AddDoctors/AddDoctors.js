import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useToken from "../../../hooks/useToken";

const AddDoctors = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [errorSignUp, setErrorSignUp] = useState("");
  const imageHostKey = process.env.REACT_APP_imageHost_Secret;

  // for private route authentication
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // calling jwt token in signup form
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    // navigate(from, { replace: true });
    navigate("/");
  }

  // get all specialty

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-portal-server-bice-xi.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  // signup function
  const handleAddDoctor = (data) => {
    // get image from imagebb setup.>> first see imgbb instruction along with mdn file uploading section
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctors = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          fetch("https://doctor-portal-server-bice-xi.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctors),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`Doctor ${data.name} added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Doctor page</h1>
      <div className="h-[880px] mt-10">
        <div className="w-96 p-7 rounded-xl shadow-2xl">
          <h2 className="text-2xl text-center font-bold">Add Doctor</h2>
          <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Your name is required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-600" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Your Email is required" })}
                className="input input-bordered w-full max-w-xs "
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text  font-bold">Select Specialty</span>
              </label>
              <select
                {...register("specialty")}
                className="select select-bordered w-full max-w-xs"
              >
                {specialties.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Upload Photo</span>
              </label>
              <input
                type="file"
                {...register("image", { required: "Required field" })}
                className="file-input file-input-bordered w-full max-w-xs"
              />

              {errors.image && (
                <p className="text-red-600" role="alert">
                  {errors.image?.message}
                </p>
              )}
            </div>

            <input
              className="w-full max-w-xs btn btn-accent mt-5"
              type="submit"
            />
          </form>
          {errorSignUp && (
            <p className="text-red-600 text-semibold">{errorSignUp}</p>
          )}
          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
