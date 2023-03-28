import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice";
import { todosReducer } from "./todosReducer";
import todosReducer from "./todosReducer";

export const store = configureStore({
  reducer: { counter: counterReducer, todos: todosReducer },
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement(5));
store.dispatch(counterSlice.actions.reset());

store.dispatch(
  todosSlice.actions.add({ id: 0, title: "Vai allo shop", completed: false })
);

store.dispatch(
  todosSlice.actions.add({ id: 1, title: "Vai al parco", completed: false })
);

store.dispatch(todosSlice.actions.edit({ id: 0, data: { completed: true } }));

store.dispatch(todosSlice.actions.remove(0));
