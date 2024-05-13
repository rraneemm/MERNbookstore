import React from "react";
import BannerCards from "./BannerCards";

const Banner = () => {
  return (
    <div className="px-24 bg-green-50 lex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left side */}
        <div className="md: w-1/2 space-y-8 h-full">
          <h2 className="text-4xl font-bold font-serif leading-snug text-emerald-900 mb-20">
            Buy Your Books
            <span className="text-stone-600 text-2xl">
              {" "}
              for the Best Prices:
            </span>
          </h2>
          <p className="md:w-5/10  font-bold text-5xl text-green-800">
            Welcome to our world of endless stories, where every page holds a
            new adventure waiting to be explored.
          </p>
          {/* <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a Book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className=" bg-transparent px-6 py-2 text-green-700 font-medium hover:bg-stone-200 transition-all eas duration-200">
              Search
            </button>
  </div>*/}
        </div>
        {/*right side */}
        <div>
          <BannerCards />
        </div>
      </div>
    </div>
  );
};

export default Banner;
