import React from "react";
import logo from "../../assets/logo.jpg";
import { BsCart3 } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  const navigate = useNavigate();

  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/login"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} className="w-36 h-16 text-white p-2  rounded-full" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <HeaderLinks path="all" />
          <HeaderLinks path="electronics" />
          <HeaderLinks path="women's clothing" />
          <HeaderLinks path="men's clothing" />
          <HeaderLinks path="jewelery" />
        </nav>
        <div className="flex gap-5">
          <button
            onClick={() => navigate("/cart")}
            className="inline-flex relative items-center bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0 text-white"
          >
            <BsCart3 className="w-4 h-4 ml-1" />
            <span className="absolute -top-3 bg-orange-600 text-sm w-5 rounded-full -left-2">
              {totalQuantity}
            </span>
          </button>
          <Link to="/addProduct">
            <button className="inline-flex gap-2 items-center bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0  text-white">
              <MdAdd />
              Add product
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
