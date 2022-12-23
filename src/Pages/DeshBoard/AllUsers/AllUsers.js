import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
const AllUsers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-portal-server-bice-xi.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`https://doctor-portal-server-bice-xi.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin has successful");
          refetch();
        }
      });
  };

  // const handleDelete = (id) => {
  //   fetch(`https://doctor-portal-server-bice-xi.vercel.app/users/admin/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         toast.success("Deleted user Successfully");
  //         refetch();
  //       }
  //       console.log(data);
  //     });
  // };

  return (
    <div>
      <h1 className="text-2xl text-center mt-10">all users page</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-success"
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button
                  // onClick={() => handleDelete(user._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
