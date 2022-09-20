import React from "react";
import logo from "../assets/images/lictlogo.jpeg";
import { useState } from "react";
//import axios from "axios";
import axios from "../api/axios";
import { useAuth } from "../Context/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handlemail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log({ email, password });
    axios
      .post("login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        // alert('success')
        setAuth({ token: result?.data?.token });
        sessionStorage.setItem("token", result.data.token);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setError(error.response.data.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className=" bg-gray-300 w-full h-screen flex items-center justify-center p-3">
        <form className="bg-white shadow-lg rounded px-8 pt-3 pb-8 mb-4 md:w-1/3 lg:w-1/4">
          <div className="mb-2 text-gray-800 font-semibold text-center mx-auto">
            <h3 className="py-2">Library Management System</h3>
            <div className="flex justify-center w-full">
              <img
                src={logo}
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-center py-3">{error}</div>
          )}

          {/* for email */}
          <div className="mb-4 text-left">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handlemail}
            />
          </div>

          {/* for password */}
          <div className="mb-6 text-left">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="**************"
              value={password}
              onChange={handlePassword}
            />
          </div>

          {/* for Login */}
          <div className="flex flex-col items-center justify-between">
            <button
              className="w-full bg-green-700 hover:bg-green-700/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleApi}
            >
              {loading ? "Logging In..." : "Login"}
            </button>
            <a
              className="mt-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href={"#"}
            >
              Forgot Password?
            </a>
            <div className="w-full text-center">
              <h2 className="w-full font-semibold text-sm text-yellow-800 hover:text-yellow-500 pt-3">
                {" "}
                Lumbini ICT Campus
              </h2>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
