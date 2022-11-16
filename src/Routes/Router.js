import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DeshBoard from "../Pages/DeshBoard/DeshBoard";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Home/MakeAppointment/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "appointment",
        element: (
          <PrivateRouter>
            {" "}
            <Appointment></Appointment>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DeshBoard></DeshBoard>
      </PrivateRouter>
    ),
  },
]);
