import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddDoctors from "../Pages/DeshBoard/AddDoctors/AddDoctors";
import AllUsers from "../Pages/DeshBoard/AllUsers/AllUsers";
import DeshBoard from "../Pages/DeshBoard/DeshBoard";
import ManageDoctors from "../Pages/DeshBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../Pages/DeshBoard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Home/MakeAppointment/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRouter from "./AdminRouter";
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
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRouter>
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/adddoctors",
        element: (
          <AdminRouter>
            <AddDoctors></AddDoctors>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRouter>
            <ManageDoctors></ManageDoctors>
          </AdminRouter>
        ),
      },
    ],
  },
]);
