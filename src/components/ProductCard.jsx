import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <>
      <Link to={`/product/${id}`} className="text-gray-700 ">
        <div className="overflow-hidden ">
          <img
            src={image[0]}
            alt=""
            className="imgfluid hover:scale-110 transition duration-300 ease-in-out rounded-lg hover:rounded-lg"
          />
        </div>
        <div className="">
          <p className="pt-3 pb-1 text-md md:text-xl">{name}</p>
          <p className="font-semibold text-md md:text-xl">
            {price ? currency + price : null}
            {/* {currency}
            {price} */}
          </p>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
