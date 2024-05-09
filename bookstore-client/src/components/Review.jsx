import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="my-12 px-4">
      <h2 className="text-5xl font-bold text-center mb-10 leadin-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Sed vel metus in diam congue sodales vitae nec odio. Sed at
                  enim nec purus varius fermentum. Nam gravida risus in neque
                  fermentum, vel eleifend metus mattis.
                </p>
                <h5 className=" text-emerald-800 font-serif font-medium text-base">
                  Rebecca GooHunt
                </h5>
                <p className="mb-5 "> History Enthusiast</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
