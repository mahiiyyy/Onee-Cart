import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";

function Users() {
  const { serverUrl } = useContext(authDataContext);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${serverUrl}/api/user/list`,
        {
          withCredentials: true,
        }
      );

      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">
        All Users
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-pink-500 text-white">

            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b text-center"
              >
                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">
                  User
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Users;