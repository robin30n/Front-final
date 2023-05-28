import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items = action.payload;
      state.totalQuantity = action.payload.length;
    },
    addToLocalStorage(state) {
      localStorage.setItem("orderList", JSON.stringify(state.items));
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
