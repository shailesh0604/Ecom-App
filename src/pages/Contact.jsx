import React from "react";
import SectionTitle from "../components/SectionTitle";
import FormComponent from "../components/FormComponent";

function Contact() {
  return (
    <section>
      <div className="contactwrapper my-8 px-3">
        <div className="container">
          <SectionTitle headText1="Get in" headtext2="Touch" />

          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=" text-base md:text-lg">
              <h4 className=" text-xl md:text-2xl font-medium text-gray-700">
                Need Help? We're Here for You!
                <span className="ml-2">
                  <i className="fa-solid fa-envelope-circle-check"></i>
                </span>
              </h4>
              <p className="text-gray-800  w-full md:w-3/4 mt-1">
                Have a question about your order, shipping, or need help with
                returns? We're just a message away.
              </p>

              <div className="text-base md:text-lg p-5 border-2 border-gray-300 w-full  md:w-3/4 my-4">
                <ul>
                  <li className="mt-1">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="ml-3 ">shaileshinfo@gmail.com</span>
                  </li>
                  <li className="mt-1">
                    <span>
                      <i className="fa-solid fa-headset"></i>
                    </span>{" "}
                    <span className="ml-2 ">123456789</span>{" "}
                  </li>
                  <li className="mt-1">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>{" "}
                    <span className="ml-3 ">Mumbai</span>{" "}
                  </li>
                </ul>
              </div>

              <h4 className=" capitalize font-medium text-lg ">
                Connect Us for Following issue
              </h4>
              <ul className=" list-disc ml-5 capitalize " style={{}}>
                <li>Order inquiries, cancel and updates</li>
                <li>Shipping and delivery questions</li>
                <li>Damage, Returns, exchanges, or refund assistance</li>
                <li>General product information or shopping advice</li>
              </ul>

              <p className="   mt-3 w-full md:w-3/4">
                We're committed to making your shopping experience seamless and
                stress-free. Drop us a line and our support team will get back
                to you as soon as possible
              </p>
            </div>
            <div className="formcontentwrap mt-6 md:mt-0">
              <h4 className=" capitalize  mb-4 text-xl md:text-2xl font-medium text-gray-700">
                Contact Us for More Information
              </h4>
              <FormComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
