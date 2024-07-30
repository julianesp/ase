//app\users\edit\[id]\page.jsx
"use client";
    
import React, { useState, useEffect } from 'react';
import axios from 'axios' //npm install axios https://www.npmjs.com/package/axios
import { useParams, useRouter } from 'next/navigation'
 
export default function Edituser() {
    const [inputs, setInputs] = useState([]);
    const {id}=useParams();
    //console.log(id);
   
    useEffect(() => {
        getUser();
    }, []);
   
    function getUser() {
        axios.get(`http://localhost:3001/api/getuser/${id}`).then(function(response) {
            console.log(response.data[0]);
            setInputs(response.data[0]);
        });
    }
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
  
    const router = useRouter();
 
    const handleSubmit = (event) => {
        event.preventDefault();
   
        axios.put(`http://localhost:3001/api/edit/${id}`, inputs).then(function(response){
            console.log(response.data);
            router.push('/')
        });
           
    }
    return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Edit Form</h1>
            <form onSubmit={handleSubmit}> 
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900"> ID:</label>
                    <input type="text" id="id" name="id" value={id} disabled />
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900"> Full Name:</label>
                    <input type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder="Enter Your Full Name" name="name"
                    value={inputs.name || ''} 
                    onChange={handleChange}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900">Email:</label>
                    <input type="text" className="input input-bordered input-primary w-full max-w-xs" id="email" placeholder="Enter email" name="email"
                    value={inputs.email || ''} 
                    onChange={ handleChange}/>
                </div>
                <div className="mb-3 mt-3">
                    <label className="block text-sm font-medium text-gray-900">Username:</label>
                    <input type="text" className="input input-bordered input-primary w-full max-w-xs" id="username" placeholder="Enter username" name="username"
                    value={inputs.username || ''} 
                    onChange={ handleChange}/>
                </div>
                <button type="submit" name="update"  className="btn btn-primary">Update</button>
            </form>
    </div>
  );
}