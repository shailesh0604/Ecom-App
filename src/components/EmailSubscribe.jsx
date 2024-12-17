import React from "react";

function EmailSubscribe() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="emailsection flex justify-center pb-1 pt-8 md:pt-12 md:pb-4 ">
        <div className="container">
          <div className="emailcontentwrap text-gray-600 px-3">
            <h3 className=" text-2xl md:text-3xl capitalize font-semibold text-center text-gray-700  ">
              Personalized Fashion Tips
            </h3>
            <p className="text-center mt-3 text-sm md:text-lg   ">
              Enjoy Exclusive access to personalized fashion tips and expert
              styling advice tailored just for you.
            </p>
            <form
              onSubmit={onSubmitHandler}
              action=""
              className="w-full  sm:w-[500px] flex items-center  gap-3  mx-auto  my-6 border border-gray-600 pl-3  "
            >
              <input
                type="email"
                className=" w-full sm:flex-1  outline-none  "
                placeholder="Enter Your Mail"
                required
              />
              <button
                type="submit"
                className="bg-black text-white text-sm px-8 py-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailSubscribe;
