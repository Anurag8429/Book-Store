import React, { useState } from 'react';
import loginImg from "../assets/login.png";
import { backend_url } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const response = await axios.post(`${backend_url}/api/user/admin`, { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      // Handle the error response from the server
      if (error.response) {
        const errorMessage = error.response.data.message || "Invalid credentials";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* image right side */}
        <div className="w-1/2 hidden sm:block">
          <img src={loginImg} alt="Admin Login" className="object-cover h-full w-full" />
        </div>
        {/* Form side */}
        <div className="flexCenter w-full sm:w-1/2">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">Admin Login</h3>
            </div>
            <div className="w-full">
              <label htmlFor="email" className="medium-15">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <button type="submit" className="btn-dark w-full mt-5 !py-[7px] !rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
