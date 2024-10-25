import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import toast, { Toaster } from "react-hot-toast";
import ProductsList from "./ProductsList.jsx";

export default function Home() {
  const [category, setCategory] = useState("");
  const notify = () => toast("You logged in.");

  useEffect(() => {
    notify();
  }, []);

  console.log("Home category:", category); // Debug log

  const handleClick = () => {
    // Your click handling logic here
  };

  return (
    <>
      <div onClick={handleClick} className="h-[1022px]">
        <br />
        <br />
        <Spline
          className="absolute w-full z-0"
          scene="https://prod.spline.design/iL0euCkqI6so6oEj/scene.splinecode"
        />
        <div
          className="mt-16 mx-auto flex text-center flex-col relative"
          style={{ width: "70%" }}
        >
          <div
            className="p-9 font-medium text-lg"
            style={{ letterSpacing: "1.5px" }}
          >
            <span
              style={{ fontFamily: "Mukta", zIndex: 1 }}
              className=" sm:m-3 sm:font-semibold sm:text-7xl"
            >
              the all-in-one toolkit
            </span>
            <span
              style={{ fontFamily: "Mukta", zIndex: 1 }}
              className="font-semibold text-7xl"
            >
              for manag<span className="text-white">ing</span> projects.
            </span>
            <p>
              one work to keep track of all your work, Bring together tasks,
              documents,
            </p>
            <p>timelines, planning, files and your team communication</p>
          </div>
          <div className="text-xl flex p-5 text-center justify-center relative">
            <button
              className="m-5 outline pl-6 pr-6 pt-4 pb-4 rounded-md hover:bg-deep-purple-700 hover:text-white hover:outline-black"
              type="button"
            >
              Explore Product
            </button>
            <button
              style={{ backgroundColor: "#3a2395" }}
              className="text-white m-5 pl-6 pr-6 pt-4 pb-4 rounded-md hover:text-black hover:bg-white"
            >
              Get Started
            </button>
          </div>
        </div>
        <Toaster />
      </div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          onClick={() => setCategory("laptop")}
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Laptops
        </button>
        <button
          onClick={() => setCategory("mobile")}
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Mobiles
        </button>
        <button
          onClick={() => setCategory("console")}
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Consoles
        </button>
        <button
          type="button"
          onClick={() => setCategory("accessories")}
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Accessories
        </button>
        <button
          type="button"
          onClick={() => setCategory("tv")}
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          TVs
        </button>
        
      </div>
      {category && <ProductsList category={category} />}
    </>
  );
}
