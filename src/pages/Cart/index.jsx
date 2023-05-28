import React from "react";
import { useSelector } from "react-redux";
import CartTable from "../../components/CartTable";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Checkout from "../../components/Checkout";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="container mx-auto  ">
      <Link to='/' className="mt-[2%] ml-[85%] rounded-sm w-[10%] p-1 flex gap-1 bg-purple-600 hover:bg-purple-700 text-white justify-center">
        <p className="text-sm max-sm:hidden max-md:hidden max-lg:hidden max-xl:text-[14px]">Go Back Home</p>
        <AiOutlineHome />
      </Link>
      <div className="flex max-sm:flex-col max-md:flex-col my-10 ">
        <div className="w-screen bg-white px-10 py-10">
          {totalQuantity ? (
            <CartTable />
          ) : (
            <h3 className="flex justify-center mt-[10%]">Cart is Empty</h3>
          )}
        </div>
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
