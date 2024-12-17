import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <>
      <section className="">
        <div className="container border-t ">
          <div className="flex flex-col md:flex-row justify-around gap-5 sm:gap-2 text-center pt-4 md:pt-6">
            <div className="cardWrap ">
              <div className=" flex justify-center my-3">
                <img src={assets.exchange_icon} className=" w-14" alt="" />
              </div>
              <h4 className="text-lg md:text-2xl font-semibold text-gray-700 capitalize ">
                Easy Exchange Policy
              </h4>
              <p className="text-[16px] md:text-lg   text-gray-600 mt-1 ">
                We offer hassle free exchange policy
              </p>
            </div>

            <div className="cardWrap ">
              <div className=" flex justify-center my-3">
                <img src={assets.quality_icon} className="w-14" alt="" />
              </div>
              <h4 className=" text-lg md:text-2xl font-semibold text-gray-700 capitalize ">
                7 Days Return Policy
              </h4>
              <p className="text-[16px] md:text-lg   text-gray-600 mt-1">
                We provide 7 days free return policy
              </p>
            </div>

            <div className="cardWrap ">
              <div className=" flex justify-center my-3">
                <img src={assets.support_img} className="w-12 mdw-14" alt="" />
              </div>
              <h4 className=" text-lg md:text-2xl font-semibold text-gray-700 capitalize ">
                Best customer support
              </h4>
              <p className=" text-[16px] md:text-lg  text-gray-600 mt-1">
                We provide 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPolicy;
