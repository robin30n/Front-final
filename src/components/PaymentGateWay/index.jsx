import React from "react";
import { Link } from "react-router-dom";
import payment from "../../assets/payment.jpg";
import { AiOutlineHome } from "react-icons/ai";

const PaymentGateWay = () => {
  const successPayment = () => {
    window.location.href = "/payment/success";
    localStorage.removeItem("orderList");
  };

  return (
    <div className="flex-col py-3 ">
      <Link
        to="/"
        className="mt-[2%] ml-[85%] rounded-sm w-[10%] p-1 flex gap-1 bg-purple-600 hover:bg-purple-700 text-white justify-center"
      >
        <p className="text-sm max-sm:hidden max-md:hidden max-lg:hidden max-xl:text-[14px]">
          Go Back Home
        </p>
        <AiOutlineHome />
      </Link>
      <img
        src={payment}
        alt="paymentgateway"
        className="w-[35%] h-[60vh] m-auto max-sm:w-[60%]"
      />
      <div className="flex justify-center gap-32 mt-4 max-sm:gap-3">
        <button
          onClick={successPayment}
          className="p-3 px-10 rounded-md bg-green-300 text-lime-900  border-emerald-800 max-sm:px-4 max-sm:p-1"
        >
          BUY
        </button>
        <button
          onClick={() => (window.location.href = "/payment/failure")}
          className="p-3 px-10 rounded-md bg-red-300 text-red-900  border-red-800 max-sm:px-4 max-sm::p-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentGateWay;
