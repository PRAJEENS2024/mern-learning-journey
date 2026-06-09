import React from "react";
import ReactDOM from "react-dom/client";

const headingElement = (
    <h1>Hello JSX</h1>
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(headingElement);