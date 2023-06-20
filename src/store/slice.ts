import { CartItem } from "@/lib/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { auth } from '@clerk/nextjs';

export const getCartItems = createAsyncThunk("cartItems", async () => {
  // 'use server'
  // const { userId } = auth();
  // console.log(userId)
  let user_id = localStorage.getItem("user_id");
  // console.log("id ", user_id);
  // if(!user_id ){
  let cartFetch = await fetch(`/api/cart`, {
    method: "GET",
  });
  let cartJson = await cartFetch.json();
  // console.log(cartJson);
  return cartJson.res;
 
});

interface InitialState {
  //   cartItemlength: number;
  cartItems: CartItem[];
  loading: boolean;
  error: boolean;
}

const initialState: InitialState = {
  //   cartItemlength: 0,
  cartItems: [],
  loading: false,
  error: false,
};

const storeSlice = createSlice({
  initialState: initialState,
  name: "store",
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      // state.cartItemlength = state.cartItemlength + action.payload
      // const {payload} = action
      state.cartItems = action.payload;
    },
    deleteItem: (state, action) => {
      state.cartItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state, action) => {
      // state.cartItems = []
      state.loading = true;
    }),
      builder.addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.loading = false;
      });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { addItem ,deleteItem} = storeSlice.actions;

export default storeSlice.reducer;
