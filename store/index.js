import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice";

import counterReducer from "./slice";

export const store = configureStore({
    reducer: { counterReducer },
});

store.dispatch(counterSlice.actions.increment()); 
store.dispatch(counterSlice.actions.increment()); 
store.dispatch(counterSlice.actions.decrement(5)); 
store.dispatch(counterSlice.actions.reset()); 