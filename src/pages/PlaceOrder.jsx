import React, { useContext, useState } from "react";
import TotalCartAmount from "../components/TotalCartAmount";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    currency,
    gst_tax_fee,
    delivery_fee,
    userCartAmountInfo,
    setuserCartAmountInfo,
  } = useContext(ShopContext);

  const placeOrderHandle = () => {
    navigate("/orders");
    userCartAmountInfo.PaymentOption = method;

    toast.success("You Order Placed Successfully !");
  };

  return (
    <>
      <section className="polaceOrderSection sectionpad ">
        <div className="container">
          <div className="row">
            <div className="col6">
              {/* delivery Info Wrapper  */}

              <div className="wrapper mb-8">
                <div className="flex items-center  gap-2">
                  <h2 className="uppercase text-xl md:text-3xl font-medium text-gray-500  ">
                    Delivery
                    <span className="text-gray-800  ml-4 ">Information </span>
                  </h2>
                  <span className=" w-16 sm:w-12  h-1 bg-gray-700"></span>
                </div>
              </div>

              <div className="formWrap my-5">
                <form action="" className="text-xl">
                  <div className=" flex ">
                    <div className="mr-4 w-1/2">
                      <input
                        type="text"
                        className="border font-normal border-gray-500 rounded py-2 w-full px-3   "
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="border font-normal border-gray-500 rounded py-2 px-3 w-full  "
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      type="email"
                      className="border font-normal border-gray-500 rounded py-2 px-3 w-full  "
                      required
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="mt-4">
                    <input
                      type="text"
                      className="border font-normal border-gray-500 rounded py-2 px-3 w-full  "
                      required
                      placeholder="Address Details"
                    />
                  </div>

                  <div className=" flex mt-4 ">
                    <div className="mr-4 w-1/2">
                      <input
                        type="text"
                        className="border font-normal border-gray-500 rounded py-2 w-full px-3   "
                        required
                        placeholder="City"
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="border font-normal border-gray-500 rounded py-2 px-3 w-full  "
                        required
                        placeholder="State"
                      />
                    </div>
                  </div>

                  <div className=" flex mt-4 ">
                    <div className="mr-4 w-1/2">
                      <input
                        type="text"
                        className="border font-normal border-gray-500 rounded py-2 w-full px-3   "
                        required
                        placeholder="Zipcode"
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        className="border font-normal border-gray-500 rounded py-2 px-3 w-full  "
                        required
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <input
                      type="text"
                      className="border font-normal border-gray-500 rounded py-2 px-3 w-full  "
                      required
                      placeholder="Contact Number"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col6 md:pl-16  pl-5">
              {/* Total cart Amount Wrapper */}

              <div className="cartTotalWrap">
                <div className="cartTotalAmount">
                  <div className="">
                    <h3 className="uppercase text-lg md:text-3xl font-medium mb-7 ">
                      <span className="text-gray-500">total</span>{" "}
                      <span className="text-gray-700 line relative ">
                        Cart Amount
                      </span>{" "}
                    </h3>
                    <div className="flex flex-col gap-2 mt-2 text-lg">
                      <div className="flex justify-between py-1 ">
                        <p>Subtotal</p>
                        <p className="text-lg ">
                          {currency} {userCartAmountInfo.subtotal.toFixed(2)}{" "}
                        </p>
                      </div>

                      <div className="flex justify-between border-t border-gray-300 pt-3 pb-1">
                        <p>
                          GST <span className="ml-1 ">({gst_tax_fee}%)</span>
                        </p>
                        <p className="text-lg ">
                          {currency}
                          {userCartAmountInfo.gst.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex justify-between border-t border-gray-300 pt-3 pb-1">
                        <p>Delivery Fee</p>
                        <p className="text-lg ">
                          {currency} {delivery_fee.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex justify-between border-t border-gray-300 pt-3 pb-1">
                        {!userCartAmountInfo.couponCode ? (
                          <>
                            {" "}
                            <p>No Coupon Found</p>
                            <p className="text-lg ">{currency} 00.00</p>{" "}
                          </>
                        ) : (
                          <>
                            <p>
                              Coupon :
                              <span className="ml-3 font-semibold text-xl">
                                {userCartAmountInfo.couponCode.toUpperCase()}
                              </span>
                            </p>
                            <p className="text-lg font-semibold  ">
                              - {currency} {userCartAmountInfo.couponCodeAmount}
                            </p>
                          </>
                        )}
                        {/* <p>Coupon</p>
                        <p className="text-lg ">
                          {currency} {}
                        </p> */}
                      </div>

                      <div className="flex justify-between border-t border-gray-300 pt-3 pb-5">
                        <p className="text-xl font-semibold">Total</p>
                        <p className="text-xl font-semibold ">
                          {currency}{" "}
                          {userCartAmountInfo.FinalGrossPrice.toFixed(2)}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="PaymentInfoWrapper  mt-3">
                  <div className="wrapper">
                    <div className="flex items-center  gap-2">
                      <h2 className="uppercase text-xl md:text-2xl font-medium text-gray-500 ">
                        Payment
                        <span className="text-gray-800  ml-4 ">Options</span>
                      </h2>
                      <span className=" w-16 sm:w-12  h-1 bg-gray-700"></span>
                    </div>
                  </div>

                  <div className="   flex gap-3  flex-col lg:flex-row mt-5 ">
                    <div
                      onClick={() => setMethod("stripe")}
                      className={`flex items-center gap-3 border   p-2 px-3 cursor-pointer   ${
                        method == "stripe" ? `border-gray-800 border-2 ` : ``
                      }  `}
                    >
                      <p
                        className={`  min-w-3.5  h-3.5  border rounded-full  ${
                          method == "stripe" ? `bg-black` : ``
                        }  `}
                      ></p>
                      <img className="h-7 mx-3" src={assets.stripe_logo} />
                    </div>

                    <div
                      onClick={() => setMethod("razorpay")}
                      className={`flex items-center gap-3 border   p-2 px-3 cursor-pointer   ${
                        method == "razorpay" ? `border-gray-800 border-2 ` : ``
                      }  `}
                    >
                      <p
                        className={`  min-w-3.5  h-3.5  border rounded-full   ${
                          method == "razorpay" ? `bg-black` : ``
                        }   `}
                      ></p>
                      <img className="h-6 mx-4" src={assets.razorpay_logo} />
                    </div>

                    <div
                      onClick={() => setMethod("cod")}
                      className={`flex items-center gap-3 border   p-2 px-3 cursor-pointer   ${
                        method == "cod" ? `border-gray-800 border-2 ` : ``
                      }  `}
                    >
                      <p
                        className={`  min-w-3.5  h-3.5  border rounded-full    ${
                          method == "cod" ? `bg-black  ` : ``
                        }  `}
                      ></p>
                      <p className="uppercase font-semibold mx-3">
                        Cash On Delivery
                      </p>
                    </div>
                  </div>

                  <div className="btnWrap mt-6 w-full ">
                    <button
                      onClick={placeOrderHandle}
                      className="uppercase w-full font-semibold text-lg rounded-lg text-white bg-gray-800  p-4 px-5 "
                    >
                      Place My Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlaceOrder;
