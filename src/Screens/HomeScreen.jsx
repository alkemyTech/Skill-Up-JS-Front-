import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ExampleContainer from "../Components/ExampleComponent/ExampleContainer";
import { Navbar } from "../Components/Navbar";
import { useLoginMutation } from "../store/authApiSlice";
import { setCredentials } from "../store/authSlice";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      const { token } = data.body;
      console.log(token);
      dispatch(setCredentials({ token }));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-64">
      <form
        className="flex flex-col w-[80%] md:w-1/2 lg:w-1/3 space-y-6 rounded-lg p-5 mx-auto border-2mb-8"
        onSubmit={handleLogin}
      >
        <div className="p-5">
          <h2 className="text-center text-xl md:text-4xl">Login</h2>
        </div>
        <label htmlFor="username">Email: </label>
        <input
          className="border rounded-lg p-1 outline-none"
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="pt-4" htmlFor="password">
          Password:
        </label>
        <input
          className=" border rounded-lg p-1 outline-none"
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-end pt-4">
          <button className="py-2 px-6 border-2 rounded-xl border-white ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeScreen;
