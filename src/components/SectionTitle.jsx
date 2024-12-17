import React from "react";

function SectionTitle({ headText1, headtext2, subHeadText }) {
  return (
    <>
      <div className="wrapper">
        <div className="flex items-center justify-center gap-2">
          <h2 className="uppercase text-xl md:text-4xl font-medium text-gray-500 ">
            {headText1} <span className="text-gray-800"> {headtext2} </span>
          </h2>
          <span className=" w-16 sm:w-12  h-1 bg-gray-700"></span>
        </div>

        <p className=" capitalize w-5/6 md:w-3/4 mx-auto text-center text-md  md:text-xl pb-2 md:pb-4 my-3 md:my-4  ">
          {subHeadText}
        </p>
      </div>
    </>
  );
}

export default SectionTitle;
