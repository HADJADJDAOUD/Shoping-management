import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { setMode, setLogin } from "../state";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

/////////////////////
///////////////////////
const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  ///////////////

  const handleChanges = () => {
    setIsActive(!isActive);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("it entered");
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/users/signUp",
        data: {
          name,
          email,
          password,
          passwordConfirm,
        },
      });

      console.log(res);
      console.log("here");
      if (res.status == 200) {
        console.log(res.data.user);
        console.log(res.data.token);
        dispatch(
          setLogin({
            user: res.data.user,
            token: res.data.token,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(isActive);
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("it entered");
    console.log();
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/users/login",
        data: {
          email,
          password,
        },
      });

      console.log(res.data);
      if (res.status === 200) {
        dispatch(
          setLogin({
            user: res.data.user,
            token: res.data.token,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`  flex items-center justify-center h-[1000px]   bg-gradient-to-r from-gray-200 to-blue-200`}
    >
      <div
        className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl min-h-[600px] mb-72 ${
          isActive ? "active" : ""
        }`}
        id="container"
      >
        <div
          className="absolute top-0 left-0 w-1/2 h-full transition-all ease-in-out duration-600 sign-up"
          style={{
            zIndex: isActive ? 5 : 1,
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(100%)" : "translateX(0)",
          }}
        >
          <form
            onSubmit={handleSignUp}
            className="bg-white dark:bg-teal-900 flex flex-col items-center justify-center h-full p-10"
          >
            <h1 className="text-2xl font-bold">Create Account</h1>
            <div className="flex my-4">
              <a href="#" className="mx-3">
                <FaGooglePlusG size={24} />
              </a>
              <a href="#" className="mx-3">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="mx-3">
                <FaGithub size={24} />
              </a>
              <a href="#" className="mx-3">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <span className="text-sm mb-8">
              or use your email for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="bg-purple-100 border-none my-2 py-3 px-4 rounded w-full outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-purple-100 border-none my-2 py-3 px-4 rounded w-full outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-purple-100 border-none my-2 py-3 px-4 rounded w-full outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="bg-purple-100 border-none my-2 py-3 px-4 rounded w-full outline-none"
            />
            <button
              type="sumbit"
              className="bg-purple-700 text-white font-semibold py-3 px-8 rounded mt-4"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div
          className="absolute top-0 left-0 w-1/2 h-full transition-all ease-in-out duration-600 sign-in"
          style={{
            zIndex: isActive ? 1 : 2,
            transform: isActive ? "translateX(100%)" : "translateX(0)",
          }}
        >
          <form
            onSubmit={handleLogin}
            className="bg-white flex flex-col items-center justify-center h-full p-10"
          >
            <h1 className="text-2xl font-bold">Sign In</h1>
            <div className="flex my-4">
              <a href="#" className="mx-3">
                <FaGooglePlusG size={24} />
              </a>
              <a href="#" className="mx-3">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="mx-3">
                <FaGithub size={24} />
              </a>
              <a href="#" className="mx-3">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <span className="text-sm mb-8">or use your email for password</span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-purple-100 border-none my-2 py-3 px-4 rounded w-full outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-purple-100 border-none my-2 py-3 px-4 rounded w-full outline-none"
            />
            <a href="#" className="text-sm text-gray-500 my-2">
              Forgot Your Password?
            </a>
            <button
              type="sumbit"
              className="bg-purple-700 text-white font-semibold py-2 px-8 rounded mt-4"
            >
              Sign In
            </button>
          </form>
        </div>
        <div
          className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all ease-in-out duration-600"
          style={{
            transform: isActive ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          <div
            className="bg-purple-700 h-full w-[200%] flex items-center justify-center hidden sm:block text-white"
            style={{
              transform: isActive ? "translateX(0)" : "translateX(0)",
              transition: "all 0.6s ease-in-out",
            }}
          >
            <div
              className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10 text-center"
              style={{
                transform: !isActive ? "translateX(0)" : "translateX(-200%)",
              }}
            >
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="my-4">
                Enter your personal details to use all of the site's features
              </p>
              <button
                className=" bg-transparent border-white border-2 text-white font-semibold py-2 px-8 rounded mt-4"
                id="login"
                onClick={handleChanges}
              >
                Sign Up
              </button>
            </div>
            <div
              className=" absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-10 text-center"
              style={{
                transform: !isActive ? "translateX(200%)" : "translateX(0)",
              }}
            >
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="my-4">
                Register with your personal details to use all of the site's
                features
              </p>
              <button
                className=" bg-transparent border-white border-2 text-white font-semibold py-2 px-8 rounded mt-4"
                id="register"
                onClick={handleChanges}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
