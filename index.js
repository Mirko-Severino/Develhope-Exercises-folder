import React from "react";
import ReactDOM from "react-dom";
import Counter from "./App";

ReactDOM.render(
    <Counter initialValue={0} incrementInterval={2000} incrementAmount={5} />,
    document.getElementById("root")
);
