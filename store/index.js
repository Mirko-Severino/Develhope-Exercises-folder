import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice";
import { todosReducer } from "./todosReducer";

export const store = configureStore({
  reducer: { counterReducer, todosReducer },
});

store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement(5));
store.dispatch(counterSlice.actions.reset());

store.dispatch(
  todosReducer.actions.add({ id: 0, title: "Go to the shop", completed: false })
);

store.dispatch(
  todosReducer.actions.add({ id: 1, title: "Go to the park", completed: false })
);

store.dispatch(todosReducer.actions.edit({ id: 0, data: { completed: true } }));

store.dispatch(todosReducer.actions.remove(0));
