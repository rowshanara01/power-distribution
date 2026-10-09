import React, { useState } from "react";
import ModalForm from "../../Hooks/ModalForm/ModalForm";
import BillInfo from "../BillInfo/BillInfo";

const SearchField = () => {
  const [searchField, setSearchField] = useState("");
  // const onSubmit = (data, event) => {
  //   fetch("https://red-smarties-17325.herokuapp.com/add-billing", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json)
  //     .then((result) => {
  //       console.log("success");
  //     });
  //   event.target.reset();
  // };

  const handleSearch = () => {
    const searchText = document.getElementById("search").value;
    setSearchField(searchText);
  };
  console.log(searchField);
  return (
    <>
      <div className="navbar bg-gray-400 mt-12 w-3/4 mx-auto rounded-sm">
        <div className="flex-none">
          <h2 className="">Billings</h2>
        </div>
        <div className="flex-1 ml-6">
          <div className="form-control">
            <div className="input-group">
              <input
                id="search"
                type="text"
                placeholder="Search…"
                name="search"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <label for="my-modal-6" className="btn btn-sm modal-button">
            Add New Bill
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchField;
