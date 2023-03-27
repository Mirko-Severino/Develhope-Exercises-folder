import React from "react";
import FilteredList from "./Filtro";

export default function App() {
  const peopleList = [
    { id: 0, name: "Mirko", age: 29 },
    { id: 1, name: "Andrea", age: 28 },
    { id: 2, name: "George", age: 25 },
    { id: 3, name: "Antonio", age: 24 },
    { id: 4, name: "Matteo", age: 30 },
    { id: 5, name: "Arisa", age: 27 },
    { id: 6, name: "Lavinia", age: 20 },
    { id: 7, name: "Simone", age: 22 },
    { id: 8, name: "Jie", age: 15 },
    { id: 9, name: "Giorgia", age: 12 },
  ];

  return (
    <div>
      <FilteredList list={peopleList} />
    </div>
  );
}
