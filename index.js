import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./App";

ReactDOM.render(
    <Welcome name="John" age={66} />,
    document.getElementById("root")
);
