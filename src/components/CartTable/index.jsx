import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const qunatityHandler = (list, product, sign) => {
  const index = list.findIndex((item) => item.id === product.id);
  list.splice(index, 1, {
    title: product.title,
    image: product.image,
    id: product.id,
    price: product.price,
    quantity: sign === "+" ? product.quantity + 1 : product.quantity - 1,
  });
  
  return list;
};

const CartTable = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemHanlder = (product) => {
    if (product.quantity > 1) {
      const newList = qunatityHandler([...items], product, "-");
      dispatch(cartActions.addItemToCart(newList));
    }
    if (product.quantity === 1) {
      const filterdList = [...items].filter((item) => item.id !== product.id);
      dispatch(cartActions.addItemToCart(filterdList));
    }
  };

  const addItemHanlder = (product) => {
    const newList = qunatityHandler([...items], product, "+");
    dispatch(cartActions.addItemToCart(newList));
  };

  return (
    <>
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
      </div>
      <div className="flex mt-10 mb-5">
        <h3 className="font-semibold text-gray-600 text-xs  w-2/5 ">
          Product Details
        </h3>
        <h3 className="font-semibold  text-gray-600 text-xs  w-1/5 text-center">
          Name
        </h3>
        <h3 className="font-semibold  text-gray-600 text-xs  w-1/5 text-center">
          Price
        </h3>
        <h3 className="font-semibold  text-gray-600 text-xs  w-1/5 text-center">
          Total
        </h3>
      </div>
      {items.map((item) => (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          {console.log("item", item)}
          <div className="flex w-2/5">
            <div className="w-20 flex flex-col justify-center items-center gap-5 ">
              <img className="h-24" src={item.image} alt="" />
              <div className="flex justify-center w-1/5">
                <button
                  onClick={() => removeItemHanlder(item)}
                  className="fill-current text-gray-100   px-2 h-6 rounded-full bg-[#FD6644] "
                >
                  -
                </button>

                <span className="mx-2 border text-center w-10">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addItemHanlder(item)}
                  className="fill-current text-gray-100   px-2 h-6 rounded-full bg-[#FD6644] "
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            {item.title}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${item.price}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${item.price * item.quantity}
          </span>
        </div>
      ))}
    </>
  );
};

export default CartTable;
