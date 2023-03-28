import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => (state += action.payload || 1),
    decrement: (state, action) => (state -= action.payload || 1),
    reset: (state, action) => action.payload || initialState,
  },
});

export default counterSlice.reducer;
