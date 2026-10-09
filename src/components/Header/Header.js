import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Hooks/Loading/Loading";
const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://red-smarties-17325.herokuapp.com/user")
      .then((res) => res.json())
      .then((result) => setUser(result));
  }, []);

  const {
    isLoading,
    error,
    data: allBill,
  } = useQuery("bill", () =>
    fetch("https://red-smarties-17325.herokuapp.com/billing-list").then((res) =>
      res.json()
    )
  );
  if (isLoading) return <Loading />;
  let newAmount = 0;
  for (let count of allBill) {
    newAmount = parseInt(newAmount) + parseInt(count.amount);
  }

  return (
    <div className="navbar bg-gray-400">
      <div className="flex-1">
        <Link to="/">Power-Hack</Link>
        <Link className="ml-4" to="/login">
          Login
        </Link>
      </div>
      <div className="flex-none">
        <h1 className="text-lg font-bold text-sky-500">
          Paid Total: <span>{newAmount}</span>
        </h1>
        <div className="dropdown dropdown-end">
          <label
            onClick={() => navigate("/register")}
            tabindex="0"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
