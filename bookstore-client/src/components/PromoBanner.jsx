import React from "react";

import { Link } from "react-router-dom";

import promoPic from "../assets/Venedik kitap fuarı logo design.jpg";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-green-100 px-4 lg:px-24 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 ">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2024 Tanta Book CLub for Fiction Enthusiasts{" "}
          </h2>
          {/*<Link to="/register" className=" block">
            <button className="bg-stone-500 text-balck font-light px-5 py-3 rounded hover:bg-green-500 transition-all duration:300 ">
              Secure Your Place Now!
            </button>
  </Link>*/}
          <span className=" text-stone-600 font-light flex justify-center">
            Registerations open when dates are launched.
          </span>
        </div>
        <div>
          <img src={promoPic} alt="" className="w-96 rounded" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
