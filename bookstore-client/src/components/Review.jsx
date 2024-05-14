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
                  Excellent site! I've been using it for months, and it's been a
                  lifesaver for my work. Highly recommended!
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  John Doe
                </h5>
                <p className="mb-5">Software Developer</p>
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
                  This site is amazing! It exceeded all my expectations. I
                  couldn't be happier with my purchase.
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  Jane Smith
                </h5>
                <p className="mb-5">Marketing Manager</p>
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
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Absolutely love it! The quality is top-notch, and it's
                  incredibly easy to use. Would definitely recommend it to
                  others.
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  Alex Johnson
                </h5>
                <p className="mb-5">Graphic Designer</p>
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
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  I'm impressed with the functionality and design of this site.
                  It's definitely worth the investment!
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  Emily Davis
                </h5>
                <p className="mb-5">UX Designer</p>
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
                  Couldn't be happier with my purchase! It's been a game-changer
                  for my siteivity.
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  Michael Brown
                </h5>
                <p className="mb-5">Entrepreneur</p>
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
                  Amazing site! It's been an essential tool for my daily tasks.
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  Sarah Lee
                </h5>
                <p className="mb-5">Project Manager</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  Great site! It's been instrumental in streamlining my
                  workflow.
                </p>
                <h5 className="text-emerald-800 font-serif font-medium text-base">
                  Amanda Clark
                </h5>
                <p className="mb-5">Content Creator</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
