import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allUsers">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctors">Add Doctors</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
