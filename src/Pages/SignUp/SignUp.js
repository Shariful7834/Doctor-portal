import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const [errorSignUp, setErrorSignUp] = useState("");

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

  // signup function
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully User Created");
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then((result) => {
            saveUser(data.name, data.email);
          })
          .catch((error) => {
            console.log(error.message);
            setErrorSignUp(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setErrorSignUp(error.message);
      });
    // console.log(data);
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Loged In successfully");
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctor-portal-server-bice-xi.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
        // navigate(from, { replace: true });
      });
  };

  return (
    <div className="h-[880px] flex justify-center items-center">
      <div className="w-96 p-7 rounded-xl shadow-2xl">
        <h2 className="text-2xl text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Your Password is required",
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Password must be stronger",
                },
              })}
              className="input input-bordered w-full max-w-xs "
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
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
        <div className="divider">OR</div>

        <input
          onClick={handleGoogle}
          className="btn btn-outline btn-accent mt-5 w-full"
          type="submit"
          value="CONTINUE WITH GOOGLE!"
        />
      </div>
    </div>
  );
};

export default SignUp;
