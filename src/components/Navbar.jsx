import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const navigate = useNavigate();

  const searchClickHandle = () => {
    setShowSearch(true);
    navigate("/collections");
  };

  return (
    <>
      <nav className="py-3  sticky shadow-lg top-0 w-full bg-[#ffff] z-[999]">
        <div className="container">
          <div className="navwrapper flex justify-between items-center px-3	">
            <div className="logowrap">
              <Link to="/">
                <img
                  src={assets.logo2}
                  alt=""
                  className=" w-[140px]   md:w-[225px]"
                />
              </Link>
            </div>
            <div className="menulinkswrap hidden md:block">
              <ul className="flex uppercase items-center">
                <li className="mx-3">
                  <NavLink to="/">
                    <p className="mb-1 font-medium">Home</p>
                    <hr className="w-2/4 bg-gray-600 h-[2px] border-none mx-auto hidden" />
                  </NavLink>
                </li>
                <li className="mx-3">
                  <NavLink to="/collections">
                    <p className="mb-1 font-medium">Collections</p>
                    <hr className="w-2/4 bg-gray-600 h-[2px] border-none mx-auto hidden" />
                  </NavLink>
                </li>
                {/* <li className="mx-3">
                  <NavLink to="/about">
                    <p className="mb-1 font-medium">About</p>
                    <hr className="w-2/4 bg-gray-600 h-[2px] border-none mx-auto hidden" />
                  </NavLink>
                </li> */}
                <li className="mx-3">
                  <NavLink to="/contact">
                    <p className="mb-1 font-medium">Contact</p>
                    <hr className="w-2/4 bg-gray-600 h-[2px] border-none mx-auto hidden" />
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navicons flex">
              <ul className="flex items-center">
                <li>
                  <img
                    onClick={searchClickHandle}
                    src={assets.search_icon}
                    className=" w-[17px] md:w-[20px] h-auto mr-5 md:mr-7 cursor-pointer"
                    alt=""
                  />
                </li>
                <li>
                  <div className="group relative">
                    <img
                      src={assets.profile_icon}
                      className=" w-[17px] md:w-[20px] h-auto  cursor-pointer"
                      alt=""
                    />
                    <div className="group-hover:block hidden absolute right-0 pt-4">
                      <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
                        <Link to="/profile" className="hover:text-black">
                          My Profile
                        </Link>
                        <Link to="/orders" className="hover:text-black">
                          Orders
                        </Link>
                        <Link className="hover:text-black">Logout</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/cart" className="relative">
                    <img
                      src={assets.cart_icon}
                      className=" w-[20px] h-auto ml-5 md:ml-7 relative cursor-pointer"
                      alt=""
                    />
                    <p className="absolute right-[-12px] bottom-[-5px] bg-[#262626] text-white rounded-full px-[6px]  leading-[20px] text-[14px] ">
                      {getCartCount()}
                    </p>
                  </Link>
                </li>
                <li className=" md:hidden ">
                  <Link onClick={() => setVisible(true)}>
                    <img
                      src={assets.menu_icon}
                      className=" w-[25px] h-auto  ml-6 md:ml-7 cursor-pointer"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* sidebar menu for small screen */}
      <div
        className={`fixed top-0  z-[99999] right-0 bottom-0 overflow-hidden bg-white transition-all  duration-[350ms] ease-in-out  ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="mobilemenuwrap flex flex-col pt-2 uppercase text-lg mx-1">
          <div className="pb-3 pt-1">
            <p onClick={() => setVisible(false)}>
              <span className="px-4 ">
                <i className="fa-solid fa-angle-left"></i>
              </span>
              <span>Back</span>
            </p>
          </div>
          <div className="">
            <NavLink
              to="/"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                ` py-2  pl-[42px] block border-b-2  ${
                  isActive ? "  bg-[#262626] text-white " : ""
                }  `
              }
            >
              Home
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/collections"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                ` py-2  pl-[42px] block border-b-2 ${
                  isActive ? "  bg-[#262626] text-white " : ""
                }  `
              }
            >
              Collections
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/about"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                ` py-2  pl-[42px] block border-b-2 ${
                  isActive ? "  bg-[#262626] text-white " : ""
                }  `
              }
            >
              About
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/contact"
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                ` py-2  pl-[42px] block border-b-2 ${
                  isActive ? "  bg-[#262626] text-white " : ""
                }  `
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
