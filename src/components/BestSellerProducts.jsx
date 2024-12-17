import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

function BestSellerProducts() {
  const { products } = useContext(ShopContext);

  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    const bestProductList = products.filter((item) => item.bestseller);

    setBestSellerProducts(bestProductList.slice(0, 4));
  }, []);

  console.log("bestseller product list", bestSellerProducts);

  return (
    <>
      <div className="section-bottompad">
        <SectionTitle
          headText1="Best"
          headtext2="Sellers"
          subHeadText="  Our Best-Selling Clothes: Iconic Styles, Exceptional Comfort, and Crafted to Elevate your Everyday Look."
        />
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4  gap-y-6 gap-x-8 px-3">
            {bestSellerProducts?.map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                // price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellerProducts;
