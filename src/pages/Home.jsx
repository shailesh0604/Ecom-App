import React from "react";
import HeroContent from "../components/HeroContent";
import LatestCollection from "../components/LatestCollection";
import BestSellerProducts from "../components/BestSellerProducts";

function Home() {
  // https://foreverbuy.in/ greatstack tutorial

  return (
    <>
      <HeroContent />
      <LatestCollection />
      <BestSellerProducts />
    </>
  );
}

export default Home;
