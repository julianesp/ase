//app\users\components\ListUser.jsx
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:3001/api/users").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/app/delete/${id}`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };

  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Username</th>
          <th className="py-3 px-6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="bg-white border-b">
            <td className="py-3 px-6">{user.id}</td>
            <td className="py-3 px-6">{user.name}</td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6">{user.username}</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/users/read/${user.id}`} className="btn btn-success">
                Read
              </Link>
              <Link className="btn btn-info" href={`users/edit/${user.id}/`}>
                Edit
              </Link>
              <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
