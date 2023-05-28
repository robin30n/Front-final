import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";

const PaymentResult = () => {
  const { result } = useParams();
  const dispatch = useDispatch();
  if (result === "failure") {
    const orderList = JSON.parse(localStorage.getItem("orderList"));
    dispatch(cartActions.addItemToCart(orderList));
  } else {
    dispatch(cartActions.addItemToCart([]));
  }
  return <div>{result === "failure" ? <p>failure</p> : <p>sucees</p>}</div>;
};

export default PaymentResult;
