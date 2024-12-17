import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import loaderImage from "../assets/frontend_assets/loader2.svg";
import RelatedProducts from "../components/RelatedProducts";
import plusIcon from "../assets/frontend_assets/plus.png";
import minusIcon from "../assets/frontend_assets/minus.png";

function Product() {
  const { productId } = useParams();

  const { products, currency, addToCart, getCartAmount } =
    useContext(ShopContext);
  const [productData, setProductData] = useState("");
  const [productBannerImage, setProductBannerImage] = useState("");
  const [productCollectionImage, setProuductCollectionImage] = useState([]);
  const [size, setSize] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  // getCartAmount

  const getCartAmountVal = getCartAmount();

  // product tabs
  const [activeTab, setActiveTab] = useState("productDetails");

  // console.log(productData, productData[0].category, productData[0].subCategory);

  const fetchProductData = () => {
    const fetchData = products.filter((item) => item._id === productId);

    setProductData(fetchData);
    setProuductCollectionImage(fetchData[0].image);
    setProductBannerImage(fetchData[0].image[0]);
  };

  // get product quantity
  const displayProductQuantity = () => {
    const productCount = productQuantity;

    if (productCount < 1) {
      setProductQuantity(1);
    }

    if (productCount > 5) {
      setProductQuantity(5);
    }

    return productCount;
  };

  useEffect(() => {
    fetchProductData();

    console.log("productData =", productData);
  }, [productId]);

  // calculate OfferPrice

  const caculateOfferPrice = (price) => {
    let ogPrice = price;
    let offerAmount = price * (45 / 100);

    let totalOfferAmount = ogPrice + offerAmount;

    return totalOfferAmount;
  };

  return productData === "" ? (
    <>
      <div className="flex justify-center items-center h-60">
        <img src={loaderImage} className="w-[100px]" alt="Loader" />
      </div>
    </>
  ) : (
    <>
      <div className="productwrap mb-10 px-3">
        <div className="container">
          <div className=" pt-10 transition-opacity ease-in duration-500 opacity-100 ">
            <div className="flex gap-3 sm:gap-12 flex-col sm:flex-row">
              {/* product images */}
              <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                <div className="flex flex-row  sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
                  {productCollectionImage?.map((item, index) => (
                    <img
                      onClick={() => setProductBannerImage(item)}
                      src={item}
                      key={index}
                      alt=""
                      className="w-[24%]  sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                    />
                  ))}
                </div>
                <div className="w-full sm:w-[80%]">
                  <img
                    className="w-full h-auto"
                    src={productBannerImage}
                    alt=""
                  />
                </div>
              </div>

              {/* product information */}
              {productData?.map((item) => (
                <div className="flex-1" key={item._id}>
                  <h1 className="font-medium text-xl md:text-2xl mt-2">
                    {item.name}
                  </h1>
                  <p className="font-medium text-base">
                    SKU: {item.category.toUpperCase()}
                    {item._id.toUpperCase()}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <img src={assets.star_icon} className="w-4 h-4" alt="" />
                    <img src={assets.star_icon} className="w-4 h-4" alt="" />
                    <img src={assets.star_icon} className="w-4 h-4" alt="" />
                    <img src={assets.star_icon} className="w-4 h-4" alt="" />
                    <img
                      src={assets.star_icon}
                      className="w-4 h-4 opacity-30"
                      alt=""
                    />
                    <p className="pl-2">(122)</p>
                  </div>
                  <p className="mt-5 text-3xl font-medium">
                    <span>
                      {currency}
                      {item.price}
                    </span>
                    <span className="  text-2xl  ml-4  text-gray-400  strikeAmount ">
                      {currency}
                      {caculateOfferPrice(item.price)}{" "}
                    </span>
                    <span className=" text-2xl ml-2 text-[#FF532E]">
                      (45% OFF)
                    </span>
                  </p>
                  <p className="mt-5 text-gray-500 md:w-4/5">
                    {item.description}
                  </p>

                  <div className="flex flex-col gap-4 my-8">
                    <p>Select Size</p>
                    <div className="flex gap-2">
                      {item.sizes?.map((val, index) => (
                        <button
                          onClick={() => setSize(val)}
                          key={index}
                          className={`border py-2 px-4 bg-gray-100 ${
                            val === size ? "border-orange-500 border-2" : ""
                          } `}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 my-8">
                    <p>Quantity</p>
                    <div className="flex gap-2">
                      <div>
                        <p
                          onClick={() =>
                            setProductQuantity(productQuantity - 1)
                          }
                          className="text-5xl leading-[30px] mr-2"
                        >
                          -
                        </p>
                      </div>

                      <div>
                        <p className="border text-base md:text-xl text-gray-900 w-24 rounded-sm px-2 py-1 border-gray-500">
                          {displayProductQuantity()}
                        </p>
                      </div>

                      <div>
                        <p
                          onClick={() =>
                            setProductQuantity(productQuantity + 1)
                          }
                          className="text-5xl leading-[35px] ml-2"
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        addToCart(productId, size, productQuantity)
                      }
                      className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-gray-200 hover:text-black "
                    >
                      ADD TO CART
                    </button>

                    <Link
                      to="/cart"
                      className={`bg-black uppercase text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-gray-200 hover:text-black   ${
                        getCartAmountVal > 2 ? "block" : "hidden"
                      } `}
                    >
                      Go to cart{" "}
                      <span className="ml-2">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </span>
                    </Link>
                  </div>

                  <hr className="mt-8 sm:w-4/5"></hr>

                  <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                    <p>100% Original product.</p>
                    <p>Cash on delivery is available on this product.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="producttabs">
            <div className="w-full  mx-auto  mt-6 md:mt-10">
              {/* Tabs */}
              <div className="flex space-x-4 border-b">
                <button
                  className={`py-2 px-4 text-sm md:text-lg font-medium  ${
                    activeTab === "productDetails"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-blue-500"
                  } `}
                  id="productDetails"
                  onClick={() => setActiveTab("productDetails")}
                >
                  Product Details
                </button>
                <button
                  id="productReview"
                  className={`py-2 px-4 text-sm md:text-lg font-medium  ${
                    activeTab === "productReview"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-blue-500 "
                  }   `}
                  onClick={() => setActiveTab("productReview")}
                >
                  Product Reviews
                </button>
              </div>

              {/* Tab Content */}
              <div
                className={`mt-4 p-4 border rounded-lg bg-gray-100  ${
                  activeTab == "productDetails" ? "block " : "hidden"
                }  `}
              >
                {productData?.map((item) => (
                  <p className=" text-sm md:text-lg" key={item._id}>
                    {item.productDetails}
                  </p>
                ))}
              </div>
              <div
                className={`mt-4 p-4 border rounded-lg bg-gray-100  ${
                  activeTab == "productReview" ? "block " : "hidden"
                }   `}
              >
                {productData?.map((item) => (
                  <ul key={item._id}>
                    {item.reviews?.map((review, index) => (
                      <li key={index} className="my-2 text-sm  md:text-lg">
                        {review}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <RelatedProducts
            category={productData[0].category}
            subCategory={productData[0].subCategory}
          />
        </div>
      </div>
    </>
  );
}

export default Product;
