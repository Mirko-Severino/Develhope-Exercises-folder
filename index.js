import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./App";

ReactDOM.render(
    <Welcome name="John" age={60} />,
    document.getElementById("root")
);
