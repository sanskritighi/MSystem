import React from "react";
import axios from "../api/axios";
import { useAuth } from "../Context/auth";
import { useState, useEffect } from "react";

function Role() {
  const [roles, setRoles] = useState();
  const { auth } = useAuth();
  const getRoles = async () => {
    axios
      .get("roles", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((result) => {
        setRoles(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(
    () => {
      getRoles();
    },
    () => {},
    []
  );

  return (
    <div>
      <div className="flex flex-col w-full sm:m-3 shadow-md p-2 rounded">
        <div className="w-1/2 md:w-full items-center">
          <form className="p-2 w-full" action="#" method="post">
            <legend className="text-xl text-grey-700 font-bold mb-5 w-full">
              Role & Permission
            </legend>

            <div className="flex items-center px-1 sm:px-3 sm:w-16">
              <label
                htmlFor="name"
                className="inline-block font-medium mr-1 sm:mr-5 tracking-wider text-grey-800"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="flex-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-half py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              <button className="ml-3 lg:w-1/8 sm:w-1/8 block bg-blue p-2 rounded hover:bg-blue text-white">
                Save
              </button>
            </div>
          </form>
        </div>
        <hr className="my-3" />
        <div className="table w-full px-3">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-50 border-b font-semibold">
                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify-center">S.NO</div>
                </th>

                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    Role Name
                  </div>
                </th>

                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify center">Action</div>
                </th>
              </tr>
            </thead>

            {roles?.map((item) => {
              return (
                <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                  <td className="p-2 border-r">{item.id}</td>
                  <td className="p-2 border-r">{item.name}</td>
                  <td className="flex w-full mx-3 justify-center gap-2">
                    <a
                      href="#"
                      className="bg-blue-800 block p-2 text-white hover:shadow-lg bg-green-600"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Role;
