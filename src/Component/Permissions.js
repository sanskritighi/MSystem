import React from "react";
import axios from "../api/axios";
import { useAuth } from "../Context/auth";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import notify from "../Utils/notifier";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

const ReadOnlyRow = ({ rowdata, editCB, delCB }) => {
  return (
    <>
      <td>{rowdata.id}</td>
      <td>{rowdata.name}</td>
      <td>{rowdata.slug}</td>
      <td>{rowdata.for}</td>
      <td className="flex space-x-2 items-center">
        <button onClick={editCB} className="bg-green-400 px-2 py-1 text-white">
          Edit
        </button>
        <button onClick={delCB} className="bg-red-400 px-2 py-1 text-white">
          Delete
        </button>
      </td>
    </>
  );
};

const EditableRow = ({ auth, rowdata, afterSaveCB, cancelCB }) => {
  const editnameRef = useRef();
  const editforRef = useRef();

  const saveEdit = () => {
    if (
      editnameRef.current.value == rowdata.name &&
      editforRef.current.value == rowdata.for
    ) {
      notify("info", "Data remains unchanged");
      cancelCB();
      return;
    }
    const params = {
      name: editnameRef.current.value,
      for: editforRef.current.value,
    };
    axios
      .put(`permissions/${rowdata.id}`, params, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((result) => {
        notify("success", "Permission Updated");
        cancelCB();
        afterSaveCB();
      })
      .catch((error) => {
        console.log(error);
        notify("error", "Error Updating Permission");
      });
  };

  return (
    <>
      <td>{rowdata.id}</td>
      <td>
        <input
          ref={editnameRef}
          type="text"
          className="w-full p-2"
          name="name"
          defaultValue={rowdata.name}
        />
      </td>
      <td>
        <input
          type="text"
          className="w-full bg-transparent p-2"
          name="slug"
          defaultValue={rowdata.slug}
          readOnly
        />
      </td>
      <td>
        <input
          ref={editforRef}
          type="text"
          className="w-full p-2"
          name="for"
          defaultValue={rowdata.for}
        />
      </td>
      <td className="flex space-x-2 items-center">
        <button
          onClick={saveEdit}
          className="bg-green-400 px-2 py-1  text-white"
        >
          Save
        </button>
        <button onClick={cancelCB} className="bg-red-400 px-2 py-1 text-white">
          Cancel
        </button>
      </td>
    </>
  );
};

function Permissions() {
  const [permissions, setPermissions] = useState();
  const [toggleForm, settoggleForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const newNameref = useRef();
  const newSlugRef = useRef();
  const newForRef = useRef();

  const { auth } = useAuth();

  const toggleFormView = () => {
    settoggleForm(!toggleForm);
  };

  const deletePermission = (id) => {
    axios
      .delete(`permissions/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((result) => {
        console.log(result);
        getPermissions();
        notify("success", "Permission Deleted");
      })
      .catch((error) => {
        console.log(error);
        notify("error", "Permission Not Deleted");
      });
  };

  const handleCreate = (e) => {
    setIsCreating(true);
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", newNameref.current.value);
    formdata.append("slug", newSlugRef.current.value);
    formdata.append("for", newForRef.current.value);
    axios
      .post("permissions", formdata, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((result) => {
        notify("success", "Permission created successfully");
        settoggleForm(false);
        getPermissions();
      })
      .catch((error) => {
        notify("error", "Permission creation failed");
      })
      .finally(() => {
        setIsCreating(false);
      });
  };

  const getPermissions = async () => {
    setLoading(true);
    axios
      .get("permissions", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((result) => {
        setPermissions(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(
    () => {
      getPermissions();
    },
    () => {},
    []
  );

  return (
    <div className="flex flex-col w-full  shadow-md p-2 rounded px-3">
      <div className="w-full py-2 flex justify-between items-center px-3">
        <button
          className={`p-2 rounded bg-blue text-white flex gap-2 items-center ${
            toggleForm ? "hover:bg-red-500" : "hover:bg-emerald-500"
          }`}
          onClick={toggleFormView}
        >
          <span>{toggleForm ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          <span>{toggleForm ? "Cancel" : "Create"}</span>
        </button>
        <div>
          <ToastContainer />
        </div>
      </div>

      {toggleForm && (
        <form
          onSubmit={handleCreate}
          className="flex flex-col justify-center gap-3 border-gray-300 border-2 border-dashed rounded transition-all px-3 py-4 ease-in-out"
        >
          <h3 className="font-semibold tracking-wide">Create Permissions</h3>
          <hr />
          <div className="flex flex-wrap items-center justify-start w-full gap-3">
            <div className="gap-2 flex justify-around items-center">
              <label for="name">Name</label>
              <input
                ref={newNameref}
                name="name"
                type="text"
                className="px-2 py-1 rounded border border-gray-300"
                placeholder="Name"
              />
            </div>
            <div className="gap-2 flex justify-around items-center">
              <label for="name">Slug</label>
              <input
                ref={newSlugRef}
                name="slug"
                type="text"
                className="px-2 py-1 rounded border border-gray-300"
                placeholder="Slug"
              />
            </div>
            <div className="gap-2 flex justify-around items-center">
              <label for="name">For</label>
              <input
                ref={newForRef}
                name="for"
                type="text"
                className="px-2 py-1 rounded border border-gray-300"
                placeholder="For"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 w-max tracking-wide font-semibold rounded bg-emerald-500 text-white hover:bg-emerald-600"
            >
              {isCreating ? <FaSpinner className="animate-spin" /> : "Create"}
            </button>
          </div>
        </form>
      )}
      <div className="table w-full mt-4">
        {loading ? (
          "Loading..."
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-50 border-b font-semibold">
                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify-center">S.NO</div>
                </th>

                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify-center">
                    Permission
                  </div>
                </th>

                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify-center">Slug</div>
                </th>

                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify-center">For</div>
                </th>

                <th className="p-2 border-r text-sm text-gray-500">
                  <div className="flex items-center justify center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {permissions?.map((item) => {
                return (
                  <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                    {isEditing ? (
                      <EditableRow
                        auth={auth}
                        rowdata={item}
                        afterSaveCB={getPermissions}
                        cancelCB={() => setIsEditing(false)}
                      />
                    ) : (
                      <ReadOnlyRow
                        rowdata={item}
                        editCB={() => setIsEditing(true)}
                        delCB={() => deletePermission(item.id)}
                      />
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Permissions;
