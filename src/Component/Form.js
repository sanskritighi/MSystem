import React, { useState } from "react";
import Validation from "../Utils/Validation";

function Forms() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    role: "",
    Gname: "",
    gcontact: "",
    goccupation: "",
    batch: "",
    rnumber: "",
  });
  const [errors, setErros] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleForSubmit = (event) => {
    event.preventDefault(event);
    setErros(Validation(values));
  };
  return (
    <>
      <div className="mt-4 relative">
        <div>
          {" "}
          <h1 className="absolut sticky top-0 md:ml-44 text-gray-700 font-bold">
            Add
          </h1>
        </div>
        <form className=" flex items-center  justify-center ">
          <div className=" border-2 shadow border-slate-200">
            <div className=" p-12 grid md:grid-cols-2 sm:grid-cols-1 md:gap-12">
              {/* for division */}
              <div>
                {/* for fullName */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block pl-3 upperCase tracking text-gray-700  font-bold mb-1"
                  >
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="enter Full name"
                    value={values.fullName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.fullName && (
                    <p className="mt-1 text-red-700 pl-2">{errors.fullName}</p>
                  )}
                </div>

                {/* for Contact */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block  pl-3 upperCase tracking text-gray-700  font-bold mb-1"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="fullName"
                    placeholder="enter Full name"
                    value={values.contact}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.contact && (
                    <p className="mt-1 text-red-700 pl-2">{errors.contact}</p>
                  )}
                </div>
                {/* for  address */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block  pl-3 upperCase tracking  text-gray-700  font-bold mb-1"
                  >
                    address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="fullName"
                    placeholder="enter address"
                    value={values.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.address && (
                    <p className="mt-1 text-red-700 pl-2">{errors.address}</p>
                  )}
                </div>
                {/* for role */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block pl-3 upperCase tracking text-gray-700  font-bold mb-1"
                  >
                    role
                  </label>
                  <input
                    type="text"
                    name="role"
                    id="fullName"
                    placeholder="enter Full name"
                    value={values.role}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.role && (
                    <p className="mt-1 text-red-700 pl-2">{errors.role}</p>
                  )}
                </div>
                {/* for  Faculty */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block  pl-3 upperCase tracking  text-gray-700  font-bold mb-1"
                  >
                    Faculty
                  </label>
                  <select
                    placeholder="enter email"
                    className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  >
                    <option>CSIT</option>
                    <option>BIM</option>
                    <option>BHM</option>
                    <option>BCA</option>
                  </select>
                </div>
                {/* for Guardian Name */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block  pl-3 upperCase tracking  text-gray-700  font-bold mb-1"
                  >
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    name="Gname"
                    id="fullName"
                    placeholder="enter email"
                    value={values.Gname}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.Gname && (
                    <p className="mt-1 text-red-700 pl-2">{errors.Gname}</p>
                  )}
                </div>
              </div>
              {/* for division */}
              <div className="mt-2">
                {/* for Email */}
                <div className="">
                  <label
                    htmlFor="name"
                    className="block upperCase tracking  pl-3 text-gray-700  font-bold md:mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="fullName"
                    placeholder="enter email"
                    value={values.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.email && (
                    <p className="mt-1 text-red-700 pl-2">{errors.email}</p>
                  )}
                </div>
                {/* for Guardian Contact */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block upperCase tracking  pl-3 text-gray-700  font-bold mb-1"
                  >
                    Guardian Contact
                  </label>
                  <input
                    type="text"
                    name="gcontact"
                    id="fullName"
                    placeholder="enter contact number"
                    value={values.gcontact}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.gcontact && (
                    <p className="mt-1 text-red-700 pl-2">{errors.gcontact}</p>
                  )}
                </div>
                {/* for Guardian ocuupation */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block upperCase tracking  pl-3 text-gray-700  font-bold mb-1"
                  >
                    Guardian Occupation
                  </label>
                  <input
                    type="text"
                    name="goccupation"
                    id="fullName"
                    placeholder="enter email"
                    value={values.goccupation}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.goccupation && (
                    <p className="mt-1 text-red-700 pl-2">
                      {errors.goccupation}
                    </p>
                  )}
                </div>
                {/* for Batch */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block upperCase tracking  pl-3 text-gray-700  font-bold mb-1"
                  >
                    Batch
                  </label>
                  <input
                    type="text"
                    name="batch"
                    id="fullName"
                    placeholder="enter batch"
                    value={values.batch}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.batch && (
                    <p className="mt-1 text-red-700 pl-2">{errors.batch}</p>
                  )}
                </div>
                {/* for Registration number */}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block upperCase tracking  pl-3 text-gray-700  font-bold mb-1"
                  >
                    Registration number
                  </label>
                  <input
                    type="number"
                    name="rnumber"
                    id="fullName"
                    placeholder="enter email"
                    value={values.rnumber}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  ></input>
                  {errors.rnumber && (
                    <p className="mt-1 text-red-700 pl-2">{errors.rnumber}</p>
                  )}
                </div>
                {/* for Gender*/}
                <div className="mt-2">
                  <label
                    htmlFor="name"
                    className="block upperCase tracking  pl-3 text-gray-700  font-bold mb-1"
                  >
                    Gender
                  </label>
                  <select
                    placeholder="enter email"
                    className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue focus:shadow-outline w-96"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                {/* end for gender */}
              </div>
            </div>
            <button
              className="inline-block px-36 sm:ml-12 md:ml-64 mb-8 place-content-end bg-blue text-white mt-2 p-2 rounded transition-duration-300 "
              onClick={handleForSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forms;
