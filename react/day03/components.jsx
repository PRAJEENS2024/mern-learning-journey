import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {

    return (

        <h1>
            Welcome To React
        </h1>

    );

};

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<Header />);