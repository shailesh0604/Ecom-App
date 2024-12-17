import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function Collections() {
  const { products, search, setSearch, showSearch } = useContext(ShopContext);

  const [collectionProducts, setCollectionProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // filter operation

  const toggleCategory = (e) => {
    // console.log(categoryFilter);

    if (categoryFilter.includes(e.target.value)) {
      // logic to remove unselect checkbox products

      setCategoryFilter((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      // logic to show selected checkbox products

      setCategoryFilter((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (typeFilter.includes(e.target.value)) {
      setTypeFilter((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setTypeFilter((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = [...products];
    // console.log(productCopy);

    // search operation
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilter.length > 0) {
      productCopy = productCopy.filter((item) =>
        categoryFilter.includes(item.category)
      );
    }

    if (typeFilter.length > 0) {
      productCopy = productCopy.filter((item) =>
        typeFilter.includes(item.subCategory)
      );
    }

    // console.log("Product Filter data", productCopy);
    setCollectionProducts(productCopy);
  };

  const sortProduct = () => {
    let filterProductsCopy = [...collectionProducts];
    // console.log("filter products = ", filterProductsCopy);

    switch (sortType) {
      case "low-high":
        // console.log(
        //   "filter data low to high",
        //   filterProductsCopy.sort((a, b) => a.price - b.price)
        // );
        setCollectionProducts(
          filterProductsCopy.sort((a, b) => a.price - b.price)
        );
        break;

      case "high-low":
        // console.log(
        //   "filter data high to low",
        //   filterProductsCopy.sort((a, b) => b.price - a.price)
        // );
        setCollectionProducts(
          filterProductsCopy.sort((a, b) => b.price - a.price)
        );
        break;

      case "relevant":
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    // console.log(categoryFilter, typeFilter);
    applyFilter();
  }, [categoryFilter, typeFilter, search]);

  useEffect(() => {
    sortProduct();
    // console.log("product sorting = ", collectionProducts);
  }, [sortType]);

  return (
    <>
      <section className="productCollections px-3 mb-8 md:mb-10">
        <div className="container ">
          <div className="flex flex-col md:flex-row gap-1 sm:gap-10 pt-5 border-t">
            {/* leftside  filter Options */}
            <div className="filterwrap min-w-60">
              {/* <p className="text-base  text-center text-gray-600 block sm:hidden capitalize mb-3 ">
                Apply product Filter By Clicking Filter Button
              </p> */}
              <p
                onClick={() => setShowFilter(!showFilter)}
                className="my-2 hidden md:flex text-lg  md:text-2xl items-center cursor-pointer gap-2 uppercase"
              >
                Filters{" "}
                {/* <img
                  className={` h-4 md:hidden ${showFilter ? "rotate-90" : ""} `}
                  src={assets.dropdown_icon}
                  alt=""
                /> */}
              </p>

              <p
                onClick={() => setShowFilter(!showFilter)}
                className="block text-center   md:hidden text-lg  mb-3  border p-2 bg-[#262626] text-white rounded-md"
              >
                <span>
                  <i className="fa-solid fa-filter"></i>
                </span>
                <span className="ml-2"> More Filter Options </span>
              </p>

              {/* category filter */}
              <div
                className={`border border-gray-300 pl-5 py-3 mt-3 md:mt-5  ${
                  showFilter ? "" : "hidden"
                }  md:block `}
              >
                <p className="mb-3 text-lg font-medium uppercase">Categories</p>
                <div className="flex flex-col gap-2 text-base font-light text-gray-700 ">
                  <p className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-3"
                      value={"Men"}
                      onChange={toggleCategory}
                    />{" "}
                    Men
                  </p>
                  <p className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-3"
                      value={"Women"}
                      onChange={toggleCategory}
                    />{" "}
                    Women
                  </p>
                  <p className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-3"
                      value={"Kids"}
                      onChange={toggleCategory}
                    />{" "}
                    Kids
                  </p>
                </div>
              </div>

              {/* subCategory filter */}
              <div
                className={`border border-gray-300 pl-5 py-3 mt-3 md:mt-5  ${
                  showFilter ? "" : "hidden"
                }  sm:block `}
              >
                <p className="mb-3 text-lg font-medium uppercase">Type</p>
                <div className="flex flex-col gap-2 text-base font-light text-gray-700 ">
                  <p className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-3"
                      value={"Topwear"}
                      onChange={toggleType}
                    />{" "}
                    Topwear
                  </p>
                  <p className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-3"
                      value={"Bottomwear"}
                      onChange={toggleType}
                    />{" "}
                    Bottomwear
                  </p>
                  <p className="flex gap-2">
                    <input
                      type="checkbox"
                      className="w-3"
                      value={"Winterwear"}
                      onChange={toggleType}
                    />{" "}
                    Winterwear
                  </p>
                </div>
              </div>
            </div>

            {/* Rightside Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between text-base sm:text-2xl mb-4 uppercase">
                <p className="relative z-20">
                  <span className="text-gray-500">All</span>
                  <span className="text-gray-700 font-medium collectiontext relative">
                    {" "}
                    Collections
                  </span>
                  <span className=" w-16 sm:w-12  h-1 bg-gray-700"></span>
                </p>

                {/* product sort */}
                <select
                  name=""
                  id=""
                  onChange={(e) => setSortType(e.target.value)}
                  className=" bg-white  border border-gray-300 text-sm md:text-base p-2 "
                >
                  <option value="relevant">Sort By : Relevant</option>
                  <option value="low-high">Sort By : Low to High</option>
                  <option value="high-low">Sort By : High to Low</option>
                </select>
              </div>

              {/* product display through map */}
              <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-4 gap-y-6 ">
                {collectionProducts?.map((item) => (
                  <ProductCard
                    id={item._id}
                    key={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collections;
