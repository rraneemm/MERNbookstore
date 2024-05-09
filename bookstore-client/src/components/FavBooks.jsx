import React from "react";
import { Link } from "react-router-dom";
import favBookImg from "../assets/The 26 True Crime Books Everyone Needs to Read.jpg";

const FavBooks = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={favBookImg} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-10/12 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favourite <span className="text-green-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Etiam tincidunt leo nec ex volutpat, sed consequat turpis lobortis. In
          hac habitasse platea dictumst. Mauris eget lorem ac urna pellentesque
          venenatis. Integer laoreet nisi vel arcu malesuada, eget venenatis
          nisi eleifend. Vivamus convallis mauris eu eros tristique, eget
          venenatis velit bibendum.{" "}
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-serif font-extrabold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-extrabold">500+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-extrabold">300+</h3>
            <p className="text-base">Book Purchases</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-stone-500 text-balck font-semibold font-serif px-5 py-2 rounded hover:bg-green-500 transition-all duration:300 ">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBooks;
