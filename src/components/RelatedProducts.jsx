import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import loaderImage from "../assets/frontend_assets/loader2.svg";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

function RelatedProducts({ category, subCategory }) {
  const [relatedProducts, setRelatedProducts] = useState("");
  const { products } = useContext(ShopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];

      // console.log(category, subCategory);

      productsCopy = productsCopy
        .filter(
          (item) =>
            item.category === category && item.subCategory === subCategory
        )
        .slice(0, 4);

      // console.log(productsCopy);
      setRelatedProducts(productsCopy);
    }
  }, []);

  return relatedProducts === "" ? (
    <>
      <div className="flex justify-center items-center h-60">
        <img src={loaderImage} className="w-[100px]" alt="Loader" />
      </div>
    </>
  ) : (
    <div className="relatedProductSection mt-6 md:mt-10">
      <div className="container">
        <SectionTitle
          headText1="Related"
          headtext2="Products"
          subHeadText="  "
        />
        <div className="grid  grid-cols-2  md:grid-cols-4  gap-y-6 gap-x-5 px-3">
          {relatedProducts?.map((item) => (
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
  );
}

export default RelatedProducts;
