import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

function LatestCollection() {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  console.log("testing context data traverse = ", products);

  return (
    <>
      <div className="sectionpad ">
        <div className="flex justify-center">
          <SectionTitle
            headText1="Latest"
            headtext2="Collections"
            subHeadText=" Discover our Latest Collection: Trendy, Stylish, and Perfect for every season. Elevate your Wardrobe Now!"
          />
        </div>

        <div className="container">
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-5 px-3">
            {latestProducts?.map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestCollection;
