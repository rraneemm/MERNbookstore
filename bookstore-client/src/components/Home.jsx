//import React from 'react'

import Banner from "./Banner";
import BestSellers from "./BestSellers";
import FavBooks from "./FavBooks";
import PromoBanner from "./PromoBanner";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellers />
      <FavBooks />
      <PromoBanner />
      <Review />
    </div>
  );
};

export default Home;
