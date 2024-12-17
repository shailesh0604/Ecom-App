import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Orders() {
  const [orderFilterData, setOrderFilterData] = useState([]);

  const {
    userCartAmountInfo,
    products,
    currency,
    tempCartItems,
    getCartCount,
  } = useContext(ShopContext);

  console.log(userCartAmountInfo);

  // console.log("order page", cartItems);

  console.log("orderpage tempcart items", tempCartItems);

  useEffect(() => {
    let fetchFilterdata = [];

    for (let k of tempCartItems) {
      console.log(k._id);

      const filterData = products.find((item) => item._id == k._id);
      fetchFilterdata.push(filterData);
      console.log(fetchFilterdata);

      console.log("orderpage tempcartitems =", tempCartItems);

      setOrderFilterData(fetchFilterdata);
    }
  }, []);

  function fetchQuantity(id) {
    let fetchQuantity;
    for (let k of tempCartItems) {
      if (id === k._id) {
        fetchQuantity = k.quantity;
      }
    }

    return fetchQuantity;
  }

  function fetchSize(id) {
    let fetchQuantity;
    for (let k of tempCartItems) {
      if (id === k._id) {
        fetchQuantity = k.size;
      }
    }

    return fetchQuantity;
  }

  function fetchPayOptions(data) {
    console.log("fetchpay order = ", data.PaymentOption);
    let setPayOption;
    switch (data.PaymentOption) {
      case "cod":
        setPayOption = "Cash on Delivery";
        break;

      case "stripe":
        setPayOption = "Amount is Prepaid through Stripe";
        break;

      case "razorpay":
        setPayOption = "Amount is Prepaid through Razorpay";
        break;
    }

    return setPayOption;
  }

  const bookDate = new Date();

  return (
    <>
      <div className="orderSection sectionpad  ">
        <div className="container px-4">
          <div className="headWrapper mb-8">
            <div className="wrapper">
              <div className="flex items-center  gap-2">
                <h2 className="uppercase text-xl md:text-4xl font-medium text-gray-500 ">
                  My <span className="text-gray-800"> orders </span>
                </h2>
                <span className=" w-16 sm:w-12  h-1 bg-gray-700"></span>
              </div>
            </div>
          </div>

          <div className="productDataWrap">
            {orderFilterData?.map((item, index) => (
              <div
                className="py-4 border-t border-b gap-4 flex flex-col text-gray-700  md:flex-row md:items-center md:justify-between "
                key={index}
              >
                <div className="flex  flex-col md:flex-row items-start gap-6 text-sm">
                  <img className="w-16 sm:w-32" src={item.image[0]} alt="" />
                  <div>
                    <p className=" text-xl md:text-2xl font-medium">
                      {item.name}
                    </p>

                    <div className="flex items-center mt-3 gap-3 text-xl text-gray-700  ">
                      <p>
                        Price : {currency} {item.price}{" "}
                      </p>
                      <p> Quantity : {fetchQuantity(item._id)} </p>
                      <p> Size : {fetchSize(item._id)} </p>
                    </div>
                    <p className="mt-3 text-xl">
                      Date :
                      <span className="text-gray-700">
                        {bookDate.toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="totalAmountDisplay  mt-4  md:mt-4  text-lg md:text-2xl font-medium">
            <p>
              Total Quantity = <span> {getCartCount()} </span>
            </p>
            <p className="mt-2  md:mt-4 ">
              Payment Options ={" "}
              <span> {fetchPayOptions(userCartAmountInfo)} </span>
            </p>
            <p className="mt-2  md:mt-4 ">
              Total Order Amount =
              <span className="ml-5">
                {currency} {userCartAmountInfo.FinalGrossPrice}{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
