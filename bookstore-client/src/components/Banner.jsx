import React from "react";
import BannerCards from "./BannerCards";

const Banner = () => {
  return (
    <div className="px-24 bg-green-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/*left side */}
        <div className="md: w-1/2 space-y-8 h-full">
          <h2 className="text-4xl font-bold font-serif leading-snug text-emerald-900 ">
            Buy and Sell Your Books
            <span className="text-stone-600 text-4xl ">
              {" "}
              for the Best Prices:
            </span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
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
          </div>
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
