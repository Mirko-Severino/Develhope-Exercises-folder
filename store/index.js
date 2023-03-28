import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = configureStore({
  reducer: { counterReducer, todosReducer },
});

store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement(5));
store.dispatch(counterSlice.actions.reset());
