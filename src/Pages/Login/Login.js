import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";
const Login = () => {
  const { userLogIn, googleSignIn } = useContext(AuthContext);
  const [signInError, SetSignInError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // get jwt token from hook for security in login page

  const [loginUserEmail, setLoginUserEmail] = useState("");

  const [token] = useToken(loginUserEmail);

  if (token) {
    // navigate(from, { replace: true })
    navigate("/");
  }

  //React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //set error null before login
  // SetSignInError("");

  // login function implemented

  const handleLogin = (data) => {
    userLogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        // navigate(from, { replace: true });
        toast.success("Loged In successfully");
      })
      .catch((error) => {
        console.log(error.message);
        SetSignInError(error.message);
      });
    console.log(data);
  };
  // signIn with google has implemented

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

  return (
    <div className="h-[880px] flex justify-center items-center">
      <div className="w-96 p-7 border-2 rounded-xl shadow-2xl">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
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
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be longer then 8",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
          </div>
          <p className="text-red-600 font-semibold">{signInError}</p>
          <input className="btn btn-accent mt-5 w-full" type="submit" />
        </form>

        <p className="mt-3">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
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

export default Login;
