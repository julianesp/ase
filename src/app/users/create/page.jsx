//api\users\create\page.jsx
"use client";

import React, { useState } from "react";
import axios from "axios"; //npm install axios https://www.npmjs.com/package/axios
import { useRouter } from "next/navigation";

const Addnewuser = () => {
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/api/adduser", inputs)
      .then((response) => console.log(response.data))
      .then(function (response) {
        console.log(response.data);
        console.trace("Error en axios: " + response.data);
        router.push("/");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New User</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Name..."
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="email..."
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Username..."
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Password..."
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add New User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnewuser;
