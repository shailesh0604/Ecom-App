import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  //   console.log(location.pathname);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex justify-center items-center border rounded-full w-3/4 md:w-1/2 lg:w-1/3  border-gray-400 px-5 py-2 my-5 mx-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1   ml-8   md:ml-0 relative outline-none bg-inherit text-base  md:text-lg"
          placeholder="Find Your Product ..."
        />
        <img src={assets.search_icon} className=" w-5  mr-2 md:pr-0  " alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-4 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
}

export default SearchBar;
