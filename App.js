import React from "react";
import CarDetails from "./Cars";

export default function App() {
  return (
    <div>
      <CarDetails
        initialData={{ model: "Evoque", year: 2018, color: "Orange" }}
      />
    </div>
  );
}
