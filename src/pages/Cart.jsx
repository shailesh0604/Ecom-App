import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import empytCart from "../assets/frontend_assets/empty-cart.png";
import SectionTitle from "../components/SectionTitle";
import { assets } from "../assets/frontend_assets/assets";
import TotalCartAmount from "../components/TotalCartAmount";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    getCartCount,
    navigate,

    tempCartItems,
    setTempCartItems,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (let i in cartItems) {
      // console.log("cartitems = ", cartItems);
      // console.log("layer1 =", i);

      for (let j in cartItems[i]) {
        // console.log("layer2 =", j);
        // console.log("layer3 =", cartItems[i][j]);

        if (cartItems[i][j] > 0) {
          tempData.push({
            _id: i,
            size: j,
            quantity: cartItems[i][j],
          });
        }
      }
    }
    console.log("cartpage tempdata =", tempData);
    setTempCartItems(tempData);

    setCartData(tempData);
  }, [cartItems]);

  // car quantity display function

  const subtractQuantityAction = (id, size, quantity) => {
    console.log(quantity);
    let itemData;
    if (quantity > 1) {
      itemData = quantity - 1;
      console.log("executed !", itemData);
      updateQuantity(id, size, itemData);
    } else {
      toast.error("Minimum 1 order is rquired !");
    }
  };

  const addQuantityAction = (id, size, quantity) => {
    console.log(quantity, typeof quantity);
    let itemData;
    if (quantity < 5) {
      itemData = quantity + 1;
      console.log("executed !", itemData);

      updateQuantity(id, size, itemData);
    } else {
      toast.error("Maximum Order Limit is 5");
    }
  };

  const cartQuantityDisplay = (quantity) => {
    let itemQuantity;
    if (quantity <= 5 || quantity >= 1) {
      itemQuantity = quantity;
    }

    return itemQuantity;
  };

  return cartData.length === 0 ? (
    <div className="text-center mt-10 md:mt-20">
      <div>
        <SectionTitle
          headText1="Your Cart"
          headtext2="Feels Lonely"
          subHeadText="Let's Fill It with Something Special !"
        />
        <p className="text-xl"></p>
      </div>
      <div className="flex justify-center">
        <img src={empytCart} alt="" />
      </div>
      <div>
        <Link
          to="/"
          className="bg-gray-700 rounded-xl text-lg text-white  p-4 inline-block mb-8"
        >
          <span className="mr-1">
            <i class="fa-solid fa-basket-shopping"></i>
          </span>{" "}
          Start Shopping
        </Link>
      </div>
    </div>
  ) : (
    <>
      <div className="contentWrap mt-10">
        <div className="container px-3">
          <div className="headwrap">
            <h1 className="uppercase text-xl md:text-4xl font-medium ">
              <span className="text-gray-500">Your</span>{" "}
              <span className="text-gray-700 line relative ">Cart</span>{" "}
            </h1>
            <div className="mt-5">
              <div>
                {cartData?.map((item, index) => {
                  // console.log("cardata item = ", item);
                  const productData = products.find(
                    (product) => product._id === item._id
                  );

                  console.log(productData);

                  return (
                    <div
                      key={item._id}
                      className="py-4 border-t text-gray-700 flex flex-col md:flex-row items-center justify-between  "
                    >
                      <div className="flex flex-row  md:w-2/4">
                        <div className="cartImg w-32 ">
                          <img
                            src={productData.image[0]}
                            className="rounded-lg"
                            alt=""
                          />
                        </div>
                        <div className="cartContent pl-5">
                          <h3 className="text-lg md:text-2xl font-medium">
                            {productData.name}
                          </h3>
                          <p className="text-sm md:text-xl mt-3">
                            <span>
                              Price :
                              <span>
                                {currency} {productData.price}
                              </span>
                            </span>
                            <span className="ml-5">
                              Size :
                              <span className="ml-3 px-2 sm:px-3 sm:py-1 border bg-slate-50">
                                {item.size}
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="quantityInputWrap flex items-center ">
                        <div className="flex  gap-4 ">
                          <p className="mt-1 md:mt-2 text-xl md:text-2xl font-medium">
                            QTY :{" "}
                          </p>
                          <div className="flex items-center gap-2">
                            <div>
                              <p
                                onClick={() =>
                                  subtractQuantityAction(
                                    item._id,
                                    item.size,
                                    item.quantity
                                  )
                                }
                                className=" text-3xl  md:text-5xl leading-[30px] mr-2"
                              >
                                -
                              </p>
                            </div>

                            <div>
                              <p className="border text-base md:text-xl text-gray-900 w-16 md:w-20 rounded-sm px-2 py-1 border-gray-500">
                                {cartQuantityDisplay(item.quantity)}
                              </p>
                            </div>

                            <div>
                              <p
                                onClick={() =>
                                  addQuantityAction(
                                    item._id,
                                    item.size,
                                    item.quantity
                                  )
                                }
                                className="text-3xl md:text-5xl leading-[35px] ml-2"
                              >
                                +
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="deletediconwrap p-6 md:p-8 ">
                          <img
                            onClick={() =>
                              updateQuantity(item._id, item.size, 0)
                            }
                            src={assets.bin_icon}
                            className="w-[30px] h-[30px] cursor-pointer "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cartAmountWrap mt-8 mb-10">
        <div className="container px-3 flex justify-center">
          <div className=" w-[90%] md:w-[30%]">
            <TotalCartAmount />
          </div>
        </div>

        <div className="flex justify-center pt-3">
          <div className="w-full  text-center">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white  rounded-lg  py-2 px-4  text-lg  uppercase "
            >
              Proceed to Checkout{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
