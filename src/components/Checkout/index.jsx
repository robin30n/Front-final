import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    items.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price)
  }, [totalPrice]);

  const checkoutHandler = () => {
    window.location.href = "/paymentgateway";
    dispatch(cartActions.addToLocalStorage());
  };

  return (
    <div
      id="summary"
      className="w-1/4 px-8 py-10 max-sm:w-3/4 max-md:w-3/4 max-lg:w-3/4"
    >
      <h1 className="font-semibold text-2xl border-b pb-8">Order</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items 3</span>
        <span className="font-semibold text-sm">590$</span>
      </div>
      <button className="bg-orange-600 hover:bg-orange-700 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${totalPrice}</span>
        </div>

        <button
          onClick={checkoutHandler}
          className="bg-purple-600 font-semibold hover:bg-purple-700 py-3 text-sm text-white uppercase w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
