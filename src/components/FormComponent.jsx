import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormComponent() {
  const initialValues = { name: "", phone: "", email: "", message: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [mailFormValue, setMailFormValue] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // Submitting deatils to email
  const [result, setResult] = useState("");

  const handleFormInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(handleValidation(formValues));
    setIsSubmit(true);

    const formData = new FormData(e.target);

    setMailFormValue(formData);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("form errors", formErrors, "issubmit", isSubmit);
      mailSubmission(mailFormValue);
    }
  }, [formErrors]);

  const handleValidation = (values) => {
    const errors = {};
    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

    if (!values.name) {
      errors.name = "Name is Required!";
    }

    if (!values.email) {
      errors.email = "Email is Required!";
    }

    if (!mailRegex.test(values.email)) {
      errors.email = "Enter Valid Email";
    }

    if (!values.phone) {
      errors.phone = "Contact Number is Required!";
    }

    if (!phoneRegex.test(values.phone)) {
      errors.phone = "Enter Valid Contact Number!";
    }

    if (!values.message) {
      errors.message = "Query Message is Required!";
    }

    return errors;
  };

  const mailSubmission = async (formDataValue) => {
    document.getElementById("formsubmitbtn").disabled = true;
    // event.preventDefault();
    setResult("Sending....");

    // const formData = new FormData(event.target);

    const formData2 = formDataValue;
    console.log("mail formdata", formData2);

    formData2.append("access_key", "ea37d9a4-de69-4760-851c-5390832cf23b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData2,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success(" Submitted Successfully !");

      setFormValues(initialValues);
      setMailFormValue({});
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    document.getElementById("formsubmitbtn").disabled = false;
  };

  // Google Sheet Integration

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit} className=" ">
          <div className="inputwrap nameinput ">
            <p className="text-gray-600 formicon">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
            </p>
            <input
              type="text"
              name="name"
              className="  border-2 mt-1 mb-1 border-gray-400 text-base md:text-xl p-2 pl-10 rounded-lg w-full md:w-96"
              placeholder="Enter your Name"
              value={formValues.name}
              onChange={handleFormInput}
            />
            <p className="errorText nameError text-red-500 font-medium  ">
              {formErrors.name}
            </p>
          </div>
          <div className="inputwrap phoneinput mt-2">
            <p className="text-gray-600 formicon">
              <span>
                <i className="fa-solid fa-phone-volume"></i>
              </span>
            </p>
            <input
              type="number"
              name="phone"
              className="  border-2 mt-1 mb-1 border-gray-400 text-base md:text-xl p-2 pl-10 rounded-lg w-full md:w-96"
              maxLength="10"
              value={formValues.phone}
              onChange={handleFormInput}
              placeholder="Enter Your Phone Number"
            />
            <p className="erroText phoneError text-red-500 font-medium ">
              {formErrors.phone}
            </p>
          </div>
          <div className="inputwrap emailinput mt-2">
            <p className="text-gray-600 formicon">
              <span>
                <i className="   fa-solid fa-envelope"></i>
              </span>
            </p>
            <input
              type="text"
              name="email"
              className="  border-2 mt-1 mb-1 border-gray-400 text-base md:text-xl p-2 pl-10 rounded-lg w-full md:w-96"
              placeholder="Enter your Email"
              value={formValues.email}
              onChange={handleFormInput}
            />
            <p className="errorText phoneError text-red-500 font-medium ">
              {formErrors.email}
            </p>
          </div>
          <div className="inputwrap queryinput mt-2">
            <p className="text-gray-600 formicon">
              <span>
                <i className="fa-solid fa-message"></i>
              </span>
            </p>
            <textarea
              className="border-2 mt-1  border-gray-400 text-base md:text-xl p-2 pl-10 rounded-lg w-full md:w-96"
              placeholder="Enter your Query"
              rows="3"
              cols="25"
              id=""
              name="message"
              value={formValues.message}
              onChange={handleFormInput}
            ></textarea>
            <p className="errorText mb-5 text-red-500 font-medium queryError ">
              {formErrors.message}
            </p>
          </div>
          <div className="">
            <button
              type="submit"
              id="formsubmitbtn"
              className="p-3 text-white rounded-lg  text-base md:text-xl  bg-gray-700 w-full md:w-96 "
            >
              Submit
            </button>
          </div>

          {/* <p>{result}</p> */}
        </form>
      </div>
    </>
  );
}

export default FormComponent;
