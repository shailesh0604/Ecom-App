import React from "react";
import { Link } from "react-router-dom";

function FooterMenu() {
  return (
    <>
      <div className="footerSection pb-6 px-4  pt-5  md:pt-7 bg-[#f5f5f5]">
        <div className="container">
          <div className="footerwrap">
            <div className=" desktofootmenu hidden md:grid   grid-cols-2   lg:grid-cols-4  gap-5 ">
              <div className="MenuWrap">
                <h4 className=" text-xl  md:text-2xl font-semibold text-gray-700 uppercase mb-2">
                  company
                </h4>
                <ul className=" leading-loose   text-gray-500  ">
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Affiliate Program</Link>
                  </li>
                  <li>
                    <Link>Stores</Link>
                  </li>
                  <li>
                    <Link>Sitemap</Link>
                  </li>
                </ul>
              </div>

              <div className="MenuWrap">
                <h4 className="  text-xl  md:text-2xl font-semibold text-gray-700  uppercase mb-2">
                  Our Support
                </h4>
                <ul className="leading-loose   text-gray-500  ">
                  <li>
                    <Link>Return, Exchange & Refunds </Link>
                  </li>
                  <li>
                    <Link>Cancellation Policy</Link>
                  </li>
                  <li>
                    <Link>Shipping Policy</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="MenuWrap">
                <h4 className=" text-xl  md:text-2xl font-semibold text-gray-700  uppercase mb-2">
                  Contact
                </h4>
                <ul className="leading-loose   text-gray-600  ">
                  <li>
                    <Link>
                      <span>
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <span className="text-lg ml-3">+91 123456789</span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>
                        <i className="fa-solid fa-envelope-open-text"></i>
                      </span>
                      <span
                        className="text-lg
                       ml-3"
                      >
                        info@befashional.com
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>
                        <i className="fa-regular fa-calendar-check"></i>
                      </span>
                      <span className="text-lg ml-3">Mon - Sat </span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                      </span>
                      <span className="text-lg ml-3">10:00 AM - 07:00 PM </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="MenuWrap">
                <h4 className="  text-xl  md:text-2xl font-semibold text-gray-700 uppercase mb-2">
                  Office Address
                </h4>
                <p className="leading-loose text-lg  text-gray-500  ">
                  BeFashional Apparels Pvt Ltd
                </p>
                <p className="   text-gray-500  ">
                  Lotus Corporate Park Wing G02 - 1502, Ram Mandir Lane, off
                  Western Express Highway, Goregaon, Mumbai, 400063
                </p>
              </div>
            </div>

            <div className="mobfootmenu block md:hidden">
              <div>
                <h4 className="text-xl  font-semibold text-gray-700  uppercase mb-1 ">
                  Company
                </h4>
                <p className="text-gray-600 text-base">
                  <Link> About Us </Link> | <Link> Affiliate Program </Link> |
                  <Link> Stores </Link> | <Link> Sitemap</Link>
                </p>
              </div>
              <div className="mt-5">
                <h4 className="text-xl  font-semibold text-gray-700  uppercase mb-1 ">
                  Our Support
                </h4>
                <p className="text-gray-600 text-base ">
                  <Link>Return, Exchange & Refunds </Link> |
                  <Link> Cancellation Policy </Link> |
                  <Link> Privacy Policy </Link> |<Link> Shipping Policy </Link>|{" "}
                  <Link> Privacy Policy </Link> |
                  <Link> Terms & Conditions </Link> | <Link> Contact Us </Link>
                </p>
              </div>

              <div className="mt-5">
                <div className="MenuWrap">
                  <h4 className=" text-xl  font-semibold text-gray-700  uppercase mb-1">
                    Contact
                  </h4>
                  <ul className="leading-loose   text-gray-600  ">
                    <li>
                      <Link>
                        <span>
                          <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        <span className="text-lg ml-3">+91 123456789</span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span>
                          <i className="fa-solid fa-envelope-open-text"></i>
                        </span>
                        <span
                          className="text-lg
                       ml-3"
                        >
                          info@befashional.com
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span>
                          <i className="fa-regular fa-calendar-check"></i>
                        </span>
                        <span className="text-lg ml-3">Mon - Sat </span>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <span>
                          <i className="fa-regular fa-clock"></i>
                        </span>
                        <span className="text-lg ml-3">
                          10:00 AM - 07:00 PM{" "}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-xl  font-semibold text-gray-700  uppercase mb-1 ">
                  Office Address
                </h4>
                <p className="text-xl  text-gray-600 ">
                  BeFashional Apparels Pvt Ltd
                </p>
                <p className="mt-2 text-base text-gray-600 ">
                  Lotus Corporate Park Wing G02 - 1502, Ram Mandir Lane, off
                  Western Express Highway, Goregaon, Mumbai, 400063
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightfoot bg-white py-4">
        <p className="text-center">
          Copyright 2024 @ <a href="#">Shailesh Bind</a> - All Right Reserved.
        </p>
      </div>
    </>
  );
}

export default FooterMenu;
