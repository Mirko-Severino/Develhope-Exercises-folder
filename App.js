import React, { Component } from "react";
import TodoList from "./Todolist";

export default class App extends Component {
  onLogin = (user) => {
    console.log(user);
  };
  render() {
    const styles = {
      list: "border overflow-hidden rounded-md m-2 w-[346px]",
      listItem:
        "border-b flex justify-between p-2 even:bg-slate-100 last:border-none",
      deleteBtn:
        "transition ease-in-out duration-200 text-xs hover:text-red-600 hover:scale-105",
    };

    return (
      <div>
        <TodoList
          render={(items, handleRemove) => {
            return (
              <ul
                className={`${styles.list} ${
                  items.length === 0 && "invisible"
                }`}
              >
                {items.map((item, index) => (
                  <li key={item + index} className={styles.listItem}>
                    {item}
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleRemove(index)}
                    >
                      -
                    </button>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </div>
    );
  }
}
