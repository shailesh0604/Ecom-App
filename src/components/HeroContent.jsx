import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function HeroContent() {
  return (
    <>
      <div className="herosection px-3 mt-5">
        <div className="container border-2 border-gray-500 ">
          <div className="row">
            {/* left side hero content */}
            <div className=" col6 flex justify-center items-center">
              <div className="leftContentWrap py-5">
                <div className=" flex  items-center gap-2 text-[#414141 ] ">
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                  <p className="uppercase font-medium text-sm md:text-xl  ">
                    Our Bestsellers
                  </p>
                </div>

                <h1 className="prata-regular text-3xl md:text-6xl text-gray-800 leading-relaxed sm:py-3  ">
                  Latest Arrivals
                </h1>

                <div className=" flex  items-center gap-2 text-[#414141 ]">
                  <p className="uppercase font-medium text-sm md:text-lg">
                    Shop Now
                  </p>
                  <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
              </div>
            </div>
            <div className="col6 flex justify-center items-center">
              <div className="rightContentWrap">
                <div className="rightimgwrap">
                  <img
                    src={assets.hero_img}
                    className="imgfluid"
                    alt="Girl in Fashional Clothes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroContent;
