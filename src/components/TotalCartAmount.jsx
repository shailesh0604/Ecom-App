import React, { useState, useContext, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

function TotalCartAmount() {
  const {
    currency,
    delivery_fee,
    getCartAmount,
    gst_tax_fee,
    productItemQuantity,
    couponsData,

    userCartAmountInfo,
    setuserCartAmountInfo,
  } = useContext(ShopContext);

  const [couponsOff, setCouponsOff] = useState("");
  const [finalTotalPrice, setFinalTotalPrice] = useState("");

  let cgst = gst_tax_fee / 2;

  const getCartAmountValue = getCartAmount();

  const finalGSTAmount = getCartAmountValue * (gst_tax_fee / 100);

  const finalAmount = Math.ceil(
    getCartAmountValue + finalGSTAmount + delivery_fee
  ).toFixed(2);

  // setFinalTotalPrice(finalAmount);

  // apply coupon code
  const applyCouponCode = () => {
    const inputCouponValue = couponsOff.toUpperCase();

    const validCouponsArray = couponsData;
    let fetchCouponAmount = 0;

    for (let k in validCouponsArray) {
      if (inputCouponValue === validCouponsArray[k].couponCode.toUpperCase()) {
        fetchCouponAmount = validCouponsArray[k].offValue;
      }
    }

    return fetchCouponAmount;
  };

  // final Amount calculate function

  const applyClickHandle = () => {
    let couponVal = applyCouponCode();
    let afterCouponPrice;

    let beforeCouponPrice = finalAmount;

    console.log("applyhandle = ", beforeCouponPrice);

    if (couponVal) {
      afterCouponPrice = beforeCouponPrice - couponVal;
      console.log("applyhandle = ", afterCouponPrice);
      setFinalTotalPrice(afterCouponPrice);
    }

    toast.success("Coupon Applied Successfully !");
  };

  // set context for cart amount data

  function setCartAmountContext() {
    let couponVal = applyCouponCode();

    if (finalTotalPrice) {
      setuserCartAmountInfo({
        subtotal: getCartAmountValue,
        gst: finalGSTAmount,
        couponCode: couponsOff.toUpperCase(),
        couponCodeAmount: couponVal,
        FinalGrossPrice: Number(finalTotalPrice),
        PaymentOption: "",
      });
    } else {
      setuserCartAmountInfo({
        subtotal: getCartAmountValue,
        gst: finalGSTAmount,
        couponCode: "",
        couponCodeAmount: "",
        FinalGrossPrice: Number(finalAmount),
        PaymentOption: "",
      });
    }
  }

  useEffect(() => {
    setCartAmountContext();
  }, [getCartAmountValue, finalTotalPrice]);

  return (
    <>
      <div className="">
        <h3 className="uppercase text-lg md:text-3xl font-medium mb-7 ">
          <span className="text-gray-500">total</span>{" "}
          <span className="text-gray-700 line relative ">Cart Amount</span>{" "}
        </h3>
        <div className="flex flex-col gap-2 mt-2 text-lg">
          <div className="flex justify-between py-1 ">
            <p>Subtotal</p>
            <p className="text-lg ">
              {currency} {Math.ceil(getCartAmountValue).toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between border-t border-gray-300 pt-3 pb-1">
            <p>
              GST <span className="ml-1 ">({gst_tax_fee}%)</span>
            </p>
            <p className="text-lg ">
              {currency} {Math.ceil(finalGSTAmount).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-3 pb-1">
            <p>Delivery Fee</p>
            <p className="text-lg ">
              {currency} {delivery_fee.toFixed(2)}
            </p>
          </div>

          <div className="flex w-full border-t border-gray-300 pt-3 pb-1">
            {/* <form className="w-full" action=""> */}
            <input
              type="text"
              value={couponsOff}
              onChange={(e) => setCouponsOff(e.target.value)}
              placeholder="Apply Coupon "
              className="border uppercase font-medium border-gray-300 text-xl py-2 px-4 w-[80%]  "
            />
            <button
              onClick={applyClickHandle}
              className="bg-gray-800 border border-gray-800 w-[20%]  py-2 px-4 text-white"
            >
              Apply
            </button>
            {/* </form> */}
          </div>

          <div className="flex justify-between border-t border-gray-300 pt-3 pb-5">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold ">
              {currency}{" "}
              {finalTotalPrice
                ? Math.ceil(finalTotalPrice).toFixed(2)
                : finalAmount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalCartAmount;
